import {ndarray, nextPermutation} from "./util.js"

export class Shape {
    constructor(m, n, d, name) {
        this.m = m
        this.n = n
        this.name = name
        if (typeof d === "number") {
            this.data = ndarray([m,n], d)
        } else {
            this.data = d
        }
    }

    size() {
        let r = 0
        for (let i = 0; i < this.m; i++) for (let j = 0; j < this.n; j++) {
            if (this.data[i][j] == 1) r++
        }
        return r
    }

    set(v, ...p) {
        for (let i = 0; i+1 < p.length; i += 2) {
            this.data[p[i]][p[i+1]] = v
        }
        return this
    }
}

export class Placement {
    constructor(x, y, s) {
        this.x = x
        this.y = y
        this.shape = s
    }
}


/**
 * 
 * @param {Shape} s 
 * @param {string} name 
 * @param {boolean} e: exchange the dimentions
 * @param {function(x,y)=>[]} f: index translator
 */
export function getTranslated(s, name, e, f) {
    if(e === undefined) {
        // name becomes postfix then
        let newName = s.name + name;
        switch (name) {
            case "cw":  return getTranslated(s, newName, true, (x, y) => [y,        s.m-1-x])
            case "ccw": return getTranslated(s, newName, true, (x, y) => [s.n-1-y,  x])
            case "180": return getTranslated(s, newName, false,  (x, y) => [s.m-1-x,  s.n-1-y])
            case "s0":  return getTranslated(s, newName, false,  (x, y) => [x,        s.n-1-y])
            case "s90": return getTranslated(s, newName, false,  (x, y) => [s.m-1-x,  y])
            case "s45": return getTranslated(s, newName, true, (x, y) => [y,        x])
            case "s135":return getTranslated(s, newName, true, (x, y) => [s.n-1-y,  s.m-1-x])
            default:    return getTranslated(s, newName, false,  (x, y) => [x,        y])
        }
    }

    let r = new Shape(e?s.n:s.m, e?s.m:s.n, 0, name)
    for (let i = 0; i < r.m; i++) for (let j = 0; j < r.n; j++) {
        let [ii, jj] = f(i, j)
        r.data[ii][jj] = s.data[i][j]
    }
    return r
}

/**
 * 
 * @param {string} a 
 */
export function createShapeFromAlias(a) {
    let arr = a.split("x");
    if (arr.length == 2) {
        return new Shape(parseInt(arr[0]), parseInt(arr[1]), 1, a)
    }

    let p = 1
    let s = null
    if (a.startsWith("L")) {
        s = new Shape(2, 3, 1).set(0, 1,0, 1,1)
    }
    else if (a.startsWith("Z")) {
        s = new Shape(3, 2, 1).set(0, 2,0, 0,1)
    }
    else if (a.startsWith("T")) {
        s = new Shape(3, 2, 1).set(0, 0,1, 2,1)
    }
    else if (a.startsWith("O")) {
        s = new Shape(2, 2, 1)
    }
    else if (a.startsWith("J")) {
        s = new Shape(2, 3, 1).set(0, 0,0, 0,1)
    }
    else if (a.startsWith("S")) {
        s = new Shape(3, 2, 1).set(0, 0,0, 2,1)
    }
    else if (a.startsWith("I")) {
        s = new Shape(1, 4, 1)
    }
    s.name = a.slice(0, p)
    if (a.length > 1) {
        s = getTranslated(s, a.slice(1))
    }

    return s
}

/**
 * 
 * @param {string} s 
 */
export function shapesFromString(s) {
    return s.split(" ").map(a => createShapeFromAlias(a))
}

/**
 * 
 * @param {Shape} a 
 * @param {Shape} b 
 */
export function compareShape(a, b) {
    if (a.m < b.m) return -1
    if (a.m > b.m) return 1
    if (a.n < b.n) return -1
    if (a.n > b.n) return 1
    for (let i = 0; i < a.m; i ++) for (let j = 0; j < a.n; j++) {
        if (a.data[i][j] < b.data[i][j]) return -1
        if (a.data[i][j] > b.data[i][j]) return 1
    }
    return 0
}

function checkCompositionInOrder(s, ss) {
    let r = ndarray([s.m, s.n], 0)

    let undoPaint = function(shape, x, y, i, j) {
        let k = i * shape.n + j
        for (let a = 0; a < shape.m; a++) for (let b = 0; b < shape.n; b++) {
            if (a * shape.n + b >= k) return
            r[x + a][y + b] -= shape.data[a][b]
        }
    }
    // try paint {shape} to r, if paint result to overlap, or value that s doesn't have
    // redo the middle-way work and return false
    let tryPaint = function(shape, x, y) {
        if (x + shape.m > s.m || y + shape.n > s.n) return false
        for (let i = 0; i < shape.m; i++) for (let j = 0; j < shape.n; j++) {
            let c1 = shape.data[i][j]
            let c2 = r[x+i][y+j]
            let c3 = s.data[x+i][y+j]
            if (c1 + c2 > c3) {
                // wrong color: roll back and return 
                undoPaint(shape, x, y, i, j)
                return false
            } else {
                r[x+i][y+j] += c1
            }
        }
        return true
    }

    let forward = function(p, m, n) {
        p[1]++
        if (p[1] + n > s.n) {
            p[1] = 0
            p[0]++
            if (p[0] + m > s.m) {
                return false
            }
        }
        return true
    }

    // witch each shape sequence, we paint shapes to r one by one, position by position
    // check at the same time and undo paint then try next position
    let ps = new Array(ss.length).fill([0, 0])
    let index = 0
    let shouldForward = false
    while (true) {
        // paint the #{index} one

        if (shouldForward) {
            // current point should be finished, otherwise go back level
            const [x,y] = ps[index]
            if (r[x][y] != s.data[x][y] || !forward(ps[index], ss[index].m, ss[index].n)) {
                if (index == 0) return false
                index--
                undoPaint(ss[index], ps[index][0], ps[index][1], ss[index].m, ss[index].n)
                console.log(`undo paint ${ss[index].name} at ${ps[index]}`)
                continue
            }
        }
        shouldForward = true

        let res = tryPaint(ss[index], ps[index][0], ps[index][1])
        if (res) {
            console.log(`paint ${ss[index].name} at ${ps[index]}`)
            console.log(r)
            index++
            if (index == ss.length) return true
            ps[index] = [...ps[index-1]]
            shouldForward = false
        } else {
            console.log(`paint ${ss[index].name} at ${ps[index]} failed`)
        }
    }

    return false
}

/**
 * 
 * @param {Shape} s 
 * @param {Shape[]} arr 
 */
export function checkComposition(s, arr) {
    let c1 = s.size()
    let c2 = arr.reduce((p, c) => p + c.size(), 0)
    if (c1 != c2) return false
    let ss = [...arr].sort(compareShape)

    // ourter loop, through all shape permutations
    do {
        console.log(ss.map(v=>v.name))
        if (checkCompositionInOrder(s, ss)) return true
    } while (nextPermutation(ss, (a,b)=>compareShape(a,b) < 0))

    return false
}
