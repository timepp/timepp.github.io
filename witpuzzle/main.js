import SAW from "./saw.js"
import {ndarray, range, shuffle} from "./util.js"

function getPassingNumber(path, m, n) {
    let pn = ndarray([m, n], 0)
    for (let i = 0; i < path.length-1; i++) {
        const [x1, y1] = path[i]
        const [x2, y2] = path[i+1]
        const dx = x2 - x1
        const dy = y2 - y1

        // dx=0,dy=-1  [x1-1,y1-1] [x1,y1-1]
        // dx=0,dy=1   [x1-1,y1] [x1,y1]
        // dx=-1,dy=0  [x1-1,y1-1] [x1-1,y1]
        // dx=1,dy=0   [x1,y1-1] [x1, y1]
        const a1 = dx == 1? x1 : x1-1
        const b1 = dy == 1? y1 : y1-1
        const a2 = dx == -1? x1-1 : x1
        const b2 = dy == -1? y1-1 : y1

        if (a1 >= 0 && b1 >= 0 && a1 < m && b1 < n) {
            pn[a1][b1]++
        }
        if (a2 >= 0 && b2 >= 0 && a2 < m && b2 < n) {
            pn[a2][b2]++
        }
    }
    return pn
}

function getRegions(path, m, n) {
    let lines = ndarray([m, n, 2], 0)
    for (let i = 0; i < path.length - 1; i++) {
        const x = Math.min(path[i+1][0], path[i][0])
        const y = Math.min(path[i+1][1], path[i][1])
        const dir = path[i+1][0] - path[i][0] != 0? 0 : 1
        lines[x][y][dir] = 1
    }

    let colors = ndarray([m-1, n-1])
    for (let i = 0; i < m-1; i++) for (let j = 0; j < n-1; j++) colors[i][j] = i * (n-1) + j
    let paint = function(colors, m, n, c1, c2) {
        for (let a = 0; a < m; a++) for (let b = 0; b < n; b++) {
            if (colors[a][b] == c2) colors[a][b] = c1
        }
    }

    let merged = false
    do {
        merged = false
        for (let i = 0; i < m - 1; i++) for (let j = 0; j < n - 1; j++) {
            if (lines[i][j][0] == 0 && j > 0) {
                let c1 = colors[i][j]
                let c2 = colors[i][j-1]
                if (c1 != c2) {
                    paint(colors, m-1, n-1, c1, c2)
                    merged = true
                }
            }
            if (lines[i][j][1] == 0 && i > 0) {
                let c1 = colors[i][j]
                let c2 = colors[i-1][j]
                if (c1 != c2) {
                    paint(colors, m-1, n-1, c1, c2)
                    merged = true
                }
            }
        }
    } while (merged)

    let regions = {}
    for (let i = 0; i < m-1; i++) for (let j = 0; j < n-1; j++) {
        const c = colors[i][j]
        if (! (c in regions)) regions[c] = []
        regions[c].push([i, j])
    }

    return Object.values(regions)
}

function splitRegion(r, maxUnitSize) {
    let m = 1
    let n = 1
    for (const [x,y] of r) {
        if (m < x+1) m = x+1
        if (n < y+1) n = y+1
    }

    let color = ndarray([m, n], -1)
    for (const [x,y] of r) {
        color[x][y] = x * n + y
    }

    let colorCount = function(c) {
        let count = 0
        for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) {
            if (color[i][j] == c) count++ 
        }
        return count
    }

    let paint = function(c1, c2) {
        for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) {
            if (color[i][j] == c1) color[i][j] = c2
        }
    }

    while (true) {
        // find all paint solution, and randomly choose one
        let paintdata = []
        for (let i = 0; i < r.length; i++) {
            const [x,y] = r[i]
            const cc = colorCount(color[x][y])
            const cd = [[x-1,y],[x+1,y],[x,y-1],[x,y+1]]
            for (const [x1,y1] of cd) {
                if (x1 >= 0 && x1 < m && y1 >= 0 && y1 < n &&
                    color[x1][y1] != -1 && 
                    color[x1][y1] != color[x][y] &&
                    colorCount(color[x1][y1]) + cc <= maxUnitSize) {
                    paintdata.push([[x,y], [x1,y1]])
                }
            }
        }
        if (paintdata.length == 0) break

        let i = Math.floor(Math.random() * paintdata.length)
        let [[x,y], [x1,y1]] = paintdata[i]
        paint(color[x][y], color[x1][y1])
    }

    let regions = {}
    for (const [x,y] of r) {
        const c = color[x][y]
        if (! (c in regions)) regions[c] = []
        regions[c].push([x, y])
    }

    return Object.values(regions)
}

// return an array represents different objects with number
// 0: empty cell
function visualize(path, m, n, v) {
    // 0: empty cell
    // 2: cross
    // 4: horizontal edge
    // 8: vertical edge
    // 3: cross in path
    // 5: horizontal edge in path
    // 9: vertical edge in path
    let arr = ndarray([m*2-1, n*2-1], 0)
    for (let i = 0; i < m*2-1; i++) for (let j = 0; j < n*2-1; j++) {
        if (i % 2 == 0 && j % 2 == 0) arr[i][j] = 2
        else if (i % 2 == 0) arr[i][j] = 8
        else if (j % 2 == 0) arr[i][j] = 4
        else if (v) arr[i][j] = ""+v[(i-1)/2][(j-1)/2]
    }

    for (let i = 0; i < path.length - 1; i++) {
        const x1 = path[i][0];
        const y1 = path[i][1];
        const x2 = path[i+1][0];
        const y2 = path[i+1][1];
        const dx = x2 - x1
        const dy = y2 - y1
        arr[x1*2][y1*2] |= 1
        arr[x2*2][y2*2] |= 1
        if (x2 == x1) {
            arr[x1*2][y1*2+dy] |= 1
        } else {
            arr[x1*2+dx][y1*2] |= 1
        }
    }
    let cvt = function(v) {
        if (v === 0) return " "
        if (v === 2) return "."
        if (v === 4) return " "
        if (v === 8) return " "
        if (v === 3) return "x"
        if (v === 5) return "-"
        if (v === 9) return "|"
        return v
    }

    let s = ""
    for (let j = 0; j < n*2-1; j++) {
        for (let i = 0; i < m*2-1; i++) {
            s += " " + cvt(arr[i][j])
        }
        s += "\n"
    }
    console.log(s)
}

// [ [ [[x,y],[x1,y1],...]]]
function applypaint(subregions, m, n) {
    let v = ndarray([m,n], " ")
    let index = 0;
    for (const a1 of subregions) {
        for (const a2 of a1) {
            for (const [x,y] of a2) {
                v[x][y] = String.fromCharCode(65 + index)
            }
            index++;
        }
    }
    return v;
}

export class Puzzle {
    constructor(m, n) {
        this.m = m
        this.n = n
        this.path = null
        this.config = {
            pathComplexity: 0.5, // 0 - 1, high complexity = large path length
            triangleCount: 0, // triangle count, 0 == no triangle
            triangleColorCount: 1, // all triangle has single color
            squareColorCount: 0, // number of max square color count, 0 == no square
            squareCount: 0, // square count, 0 == no square
            hexagonCount: 0, // hexagon
            hexagonColorCount: 0, // only happens when there are 2 mirror paths. meaningless now
            terisRegionCount: 0, //
            terisMaxParts: 4, //
            startPoint: [0, 0], //
            endPoint: [m, n], //
        }
        this.cellObjects = ndarray([m, n], null)
        this.borderObjects = ndarray([2*m+1, 2*n+1], "")
    }

    generate(conf) {
        if (conf) {
            for (let p in this.config) if (p in conf) this.config[p] = conf[p]
        }
        
        // Get the path
        const [x1, y1] = this.config.startPoint
        const [x2, y2] = this.config.endPoint
        let s = new SAW(this.m+1, this.n+1)
        s.init(x1, y1, x2, y2)
        this.generateRandomPath(s, this.config.pathComplexity)
        this.path = s.path

        // triangles
        if (this.config.triangleCount > 0) {
            const pn = getPassingNumber(this.path, this.m, this.n)
            let canfill = []
            for (const [x,y] of range([this.m, this.n])) {
                if (pn[x][y] > 0 && this.cellObjects[x][y] == null) {
                    canfill.push([x,y])
                }
            }
            shuffle(canfill)
            for (let i = 0; i < this.config.triangleCount && i < canfill.length; i++) {
                const [x,y] = canfill[i]
                this.cellObjects[x][y] = {
                    type: "triangle",
                    value: pn[x][y],
                    color: 4
                }
            }
        }

        // squares
        if (this.config.squareCount > 0) {
            const regions = getRegions(this.path, this.m+1, this.n+1)
            const colorCount = Math.min(regions.length, this.config.squareColorCount)
            const sr = shuffle(regions)
            
            let d = ndarray([this.m, this.n], 0)
            for (let i = 0; i < sr.length; i++) {
                const r = sr[i]
                for (const [x, y] of r) {
                    d[x][y] = 1 + (i % colorCount)
                }
            }

            let arr = [].concat(...regions)
            arr = shuffle(arr)
            for (let i = 0; i < arr.length && i < this.config.squareCount; i++) {
                const [x, y] = arr[i]
                this.cellObjects[x][y] = {
                    type: "square",
                    color: d[x][y]
                }
            }
        }

        if (this.config.hexagonCount > 0) {
            let arr = []
            for (let i = 0; i < this.path.length-1; i++) {
                
            }
        }
    }

    generateRandomPath(s, c) {
        const trycount = 100;
        const backdepth = 5;
        let maxlen = s.M * s.N;
    
        // parity
        // given M,N and start/end point, is there a path passing by all points?
        // or there is always 1 point left?
        // conjector: 
        // if parity(y2-y1+x2-x1) != parity(M*N-1) then we have to leave 1 point unpassed
        const p1 = s.path[0]
        const p2 = s.path[s.path.length-1]
        if ((p1[0]+p1[1]+p2[0]+p2[1]+s.M*s.N+1) % 2 == 1) {
            maxlen--;
        }
 
        // try getting longest
        for (let i = 0; i < trycount; i++) {
            if (s.path.length < maxlen) {
                for (let j = 0; j < backdepth; j++) {
                    s.randomShift(v => v.type != 3)
                }
                while (s.randomShift(v => v.type == 0));
            } else {
                break;
            }
        }

        // reduce to target length
        // the reason why we get longest and reduce, instead of stopping at target length, is that
        // we want to keep the path as random as possible
        if (c < 0) c = 0
        if (c > 1) c = 1
        let minlen = Math.abs(p2[0] - p1[0]) + Math.abs(p2[1] - p1[1]) + 1
        let targetlen = minlen + (maxlen - minlen) * c
        let count = 10000
        while (s.path.length > targetlen && count >= 0) {
            s.randomShift(v => v.type != 0)
            count--
        }
    }

    checkPath(p) {
        // check whether a path can meet configurations
        let r = true
        // triangles
        const pn = getPassingNumber(p, this.m, this.n)
        for (let i = 0; i < this.m; i++) for (let j = 0; j < this.n; j++) {
            let co = this.cellObjects[i][j]
            if (co != null) {
                co.checkResult = true
                if (co.type == "triangle") {
                    if (pn[i][j] != co.value) {
                        r = false
                        co.checkResult = false
                    }
                }
            }
        }

        // squares
        const regions = getRegions(p, this.m+1, this.n+1)
        for (const region of regions) {
            let c = -1
            for (const [x,y] of region) {
                let co = this.cellObjects[x][y]
                if (co != null && co.type == "square") {
                    if (c == -1) c = co.color
                    if (c != co.color) {
                        r = false
                        co.checkResult = false
                    }
                }
            }
        }

        return r
    }
}

function test() {
    let p = new Puzzle(5, 5)
    p.generate({
        pathComplexity: 0.5,
        triangleCount: 8
    })
    let v = ndarray([p.m-1, p.n-1], " ")
    for (const [x,y] of range([p.m-1, p.n-1])) {
        if (p.cellObjects[x][y] !== null) v[x][y] = p.cellObjects[x][y].value + ""
    }
    visualize(p.path, p.m, p.n, v)
}

function testRangeSpeed() {

}

testRangeSpeed()