import SAW from "./saw.js"
import {ndarray, range, shuffle, incCounter} from "./util.js"
import * as shape from "./shape.js"

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

function indexOf(path, x1, y1, x2, y2) {
    for (let i = 0; i < path.length; i++) {
        if (path[i][0] == x1 && path[i][1] == y1) {
            if (x2 === undefined) {
                return i
            } else {
                if (i + 1 < path.length && path[i+1][0] == x2 && path[i+1][1] == y2) {
                    return i
                } else if (i - 1 >= 0 && path[i-1][0] == x2 && path[i-1][1] == y2) {
                    return i
                } else {
                    return -1
                }
            }
        }
    }
    return -1
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

/**
 * 
 * @param {Array[]} r 
 */
function normalizeRegion(r) {
    const [minx, miny, maxx, maxy] = shape.getBounds(r)
    return r.map(v => [v[0] - minx, v[1] - miny])
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
    constructor() {
        this.m = 1
        this.n = 1
        this.path = null
        this.cellObjects = null
        this.borderObjects = null
        this.startPoints = []
        this.endPoints = []
    }
}

export class PuzzleConfig {
    constructor(o) {
        this.m = 4
        this.n = 4
        this.pathComplexity = 0.5 // 0 - 1, high complexity = large path length
        this.triangleCount = 0 // triangle count, 0 == no triangle
        this.triangleColorCount = 1 // all triangle has single color
        this.squareCount = 0 // square count, 0 == no square
        this.squareColorCount = 0 // number of max square color count, 0 == no square
        this.hexagonXCount = 0 // hexagon at cross
        this.hexagonICount = 0 // hexagon at edge
        this.hexagonColorCount = 0 // only happens when there are 2 mirror paths. meaningless now
        this.octagramCount = 0
        this.octagramColorCount = 0
        this.gapCount = 0 
        this.gapRatio = 0.4
        this.gapLength = 0.3
        this.tetrisRegionCount = 0 //
        this.tetrisMaxParts = 4 //
        this.tetrisMinParts = 1
        this.startPoints = [] //
        this.endPoints = []
        
        for (let n in o) {
            if (n in this) {
                this[n] = o[n]
            }
        }
    }
}

/**
 * 
 * @param {PuzzleConfig} conf
 * @returns {Puzzle}
 */
export function generatePuzzle(conf) {
    let startPoints = conf.startPoints.slice()
    let endPoints = conf.endPoints.slice()

    // regulate
    for (let p of startPoints) {
        if (p[0] > conf.m) p[0] = conf.m
        if (p[1] > conf.n) p[1] = conf.n
    }
    for (let p of endPoints) {
        if (p[0] > conf.m) p[0] = conf.m
        if (p[1] > conf.n) p[1] = conf.n
    }
    if (startPoints.length == 0) {
        startPoints.push([0, 0])
    }
    if (endPoints.length == 0) {
        endPoints.push([conf.m, conf.n])
    }

    // Get the path
    let p = new Puzzle()
    p.m = conf.m
    p.n = conf.n
    p.cellObjects = ndarray([p.m, p.n], null)
    p.borderObjects = ndarray([2 * p.m + 1, 2 * p.n + 1], "")
    p.startPoints = shuffle(startPoints.slice())
    p.endPoints = shuffle(endPoints.slice())

    const [x1, y1] = startPoints[0]
    const [x2, y2] = endPoints[0]
    let s = new SAW(p.m + 1, p.n + 1)
    s.init(x1, y1, x2, y2)
    generateRandomPath(s, conf.pathComplexity)
    p.path = s.path
    const regions = getRegions(p.path, p.m + 1, p.n + 1)

    // triangles
    if (conf.triangleCount > 0) {
        const pn = getPassingNumber(p.path, p.m, p.n)
        let canfill = []
        for (const [x, y] of range([p.m, p.n])) {
            if (pn[x][y] > 0 && p.cellObjects[x][y] == null) {
                canfill.push([x, y])
            }
        }
        shuffle(canfill)
        for (let i = 0; i < conf.triangleCount && i < canfill.length; i++) {
            const [x, y] = canfill[i]
            p.cellObjects[x][y] = {
                type: "triangle",
                value: pn[x][y],
                color: 4
            }
        }
    }

    // squares
    if (conf.squareCount > 0) {
        const colorCount = Math.min(regions.length, conf.squareColorCount)
        const sr = shuffle(regions)

        let d = ndarray([p.m, p.n], 0)
        for (let i = 0; i < sr.length; i++) {
            const r = sr[i]
            for (const [x, y] of r) {
                d[x][y] = 1 + (i % colorCount)
            }
        }

        let arr = [].concat(...regions)
        arr = shuffle(arr)
        for (let i = 0; i < arr.length && i < conf.squareCount; i++) {
            const [x, y] = arr[i]
            p.cellObjects[x][y] = {
                type: "square",
                color: d[x][y]
            }
        }
    }

    // hexagon
    if (conf.hexagonXCount > 0 || conf.hexagonICount > 0) {
        let arrX = []
        let arrI = []
        for (let i = 0; i < p.path.length - 1; i++) {
            let [x1, y1] = p.path[i]
            let [x2, y2] = p.path[i + 1]
            arrX.push([x2 * 2, y2 * 2])
            arrI.push([x1 + x2, y1 + y2])
        }
        shuffle(arrX)
        shuffle(arrI)
        for (let i = 0; i < arrX.length && i < conf.hexagonXCount; i++) {
            const [x, y] = arrX[i]
            p.borderObjects[x][y] = {
                type: "hexagon",
                color: 0
            }
        }
        for (let i = 0; i < arrI.length && i < conf.hexagonICount; i++) {
            const [x, y] = arrI[i]
            p.borderObjects[x][y] = {
                type: "hexagon",
                color: 0
            }
        }
    }

    // gap
    if (conf.gapCount > 0) {
        let arr = []
        for (let i = 0; i <= p.m * 2; i++) for (let j = 0; j <= p.n * 2; j++) {
            if (i % 2 == 1 && j % 2 == 0) {
                let [x1, y1, x2, y2] = [(i - 1) / 2, j / 2, (i + 1) / 2, j / 2]
                if (indexOf(p.path, x1, y1, x2, y2) == -1) arr.push([i, j])
            } else if (i % 2 == 0 && j % 2 == 1) {
                let [x1, y1, x2, y2] = [i / 2, (j - 1) / 2, i / 2, (j + 1) / 2]
                if (indexOf(p.path, x1, y1, x2, y2) == -1) arr.push([i, j])
            }
        }
        shuffle(arr)
        for (let i = 0; i < arr.length && i < conf.gapCount; i++) {
            const [x, y] = arr[i]
            p.borderObjects[x][y] = {
                type: "gap",
                length: conf.gapLength
            }
        }
    }

    // tetris
    if (conf.tetrisRegionCount > 0) {
        shuffle(regions)
        for (let i = 0; i < conf.tetrisRegionCount && i < regions.length; i++) {
            let r = regions[i]
            const subRegions = splitRegion(r, conf.tetrisMaxParts)
            shuffle(r)
            for (let i = 0; i < subRegions.length; i++) {
                const [x, y] = r[i]
                p.cellObjects[x][y] = {
                    type: "tetris",
                    shape: normalizeRegion(subRegions[i]),
                    color: 4
                }
            }
        }
    }

    // octagrams
    if (conf.octagramColorCount > 0) {
        shuffle(regions)
        let remainingOctagramCount = conf.octagramCount
        let usedColors = new Set()
        while (remainingOctagramCount > 0) {
            // iterate regions, for each region, decide to put 1 or 2 octagrams
            let assigned = false
            for (let i = 0; i < regions.length && remainingOctagramCount > 0; i++) {
                let availableCells = []
                let availableSingleColors = []
                let occupiedColors = []
                let candidateColors = [...usedColors]
                let colors = {}
                for (const [x, y] of regions[i]) {
                    let obj = p.cellObjects[x][y]
                    if (obj === null) {
                        availableCells.push([x, y])
                    } else {
                        incCounter(colors, obj.color)
                    }
                }
                for (let c in colors) {
                    if (colors[c] == 1) {
                        availableSingleColors.push(parseInt(c))
                    } else {
                        occupiedColors.push(parseInt(c))
                    }
                }

                // fill candidate colors
                for (let i = 0; i < 100 && candidateColors.length < conf.octagramColorCount; i++) {
                    if (candidateColors.indexOf(i) == -1 && (!(i in colors) || availableSingleColors.indexOf(i) >= 0)) {
                        candidateColors.push(i)
                    }
                }
                // remove occupied colors from candidate colors
                candidateColors = candidateColors.filter(c => occupiedColors.indexOf(c) == -1)
                // limit single colors
                availableSingleColors = availableSingleColors.filter(c => candidateColors.indexOf(c) >= 0)

                //console.log(i, regions)
                //console.log("used colors", usedColors)
                //console.log("colors", colors, "occupied colors", occupiedColors, "availableSingleColors", availableSingleColors)
                //console.log("candidateColors", candidateColors)

                if (candidateColors.length == 0) continue
                if (remainingOctagramCount == 1 && availableSingleColors.length == 0) continue
                
                shuffle(availableCells)
                shuffle(availableSingleColors)
                shuffle(candidateColors)
                
                let octagramCount = 0
                // acell     acolor     p1     p2
                // 0         any        0      0
                // 1         0          0      0
                // 1         >0         1      0
                // >1        0          0      1
                // >1        >0         0.5    0.5
                if (remainingOctagramCount == 1) {
                    octagramCount = 1
                } else if (availableCells.length == 1 && availableSingleColors.length > 0) {
                    octagramCount = 1
                } else if (availableCells.length > 1 && availableSingleColors.length == 0) {
                    octagramCount = 2
                } else if (availableCells.length > 1 && availableSingleColors.length > 1) {
                    octagramCount = Math.random() > 0.5? 1 : 2
                }

                if (octagramCount == 1) {
                    const [x, y] = availableCells[0]
                    p.cellObjects[x][y] = {
                        type: "octagram",
                        color: availableSingleColors[0]
                    }
                    usedColors.add(availableSingleColors[0])
                    remainingOctagramCount--
                    assigned = true
                } else if (octagramCount == 2) {
                    const [x1, y1] = availableCells[0]
                    const [x2, y2] = availableCells[1]
                    p.cellObjects[x1][y1] = {
                        type: "octagram",
                        color: candidateColors[0]
                    }
                    p.cellObjects[x2][y2] = {
                        type: "octagram",
                        color: candidateColors[0]
                    }
                    usedColors.add(candidateColors[0])
                    remainingOctagramCount -= 2
                    assigned = true
                }
            }
            if (!assigned) break
        }
    }
    return p
}

function generateRandomPath(s, c) {
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

        // initial random shift, 
        // resolve corner cases such as 2x2 saw
        const irs = Math.random() * 10
        for (let i = 0; i < irs; i++) {
            s.randomShift()
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

export function checkPath(p, path) {
        // check whether a path can meet configurations
        let r = true
        // triangles
        const pn = getPassingNumber(path, p.m, p.n)
        for (let i = 0; i < p.m; i++) for (let j = 0; j < p.n; j++) {
            let co = p.cellObjects[i][j]
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
        const regions = getRegions(path, p.m+1, p.n+1)
        for (const region of regions) {
            let c = -1
            for (const [x,y] of region) {
                let co = p.cellObjects[x][y]
                if (co != null && co.type == "square") {
                    if (c == -1) c = co.color
                    if (c != co.color) {
                        r = false
                        co.checkResult = false
                    }
                }
            }
        }
        
        // hexagons
        let h = {}
        for (let i = 0; i < path.length-1; i++) {
            let [x1, y1] = path[i]
            let [x2, y2] = path[i+1]
            h[x2*2 + "," + y2*2] = 1
            h[(x1+x2)+ "," + (y1+y2)] = 1
        }
        for (let i = 0; i <= p.m*2; i++) for (let j = 0; j <= p.n*2; j++) {
            let bo = p.borderObjects[i][j]
            if (bo != null && bo.type == "hexagon") {
                if (!((i + "," + j) in h)) {
                    r = false
                    bo.checkResult = false
                }
            }
        }

        // tetris
        for (const region of regions) {
            const s = shape.setToShape(region, "")
            let ss = []
            for (const [x,y] of region) {
                const o = p.cellObjects[x][y]
                if (o !== null && o.type === "tetris") {
                    ss.push(shape.setToShape(o.shape))
                }
            }
            if (ss.length > 0 && !shape.checkComposition(s, ss)) {
                r = false
            }
        }

        // octagrams
        for (const region of regions) {
            let colors = {}
            for (const [x, y] of region) {
                const o = p.cellObjects[x][y]
                if (o !== null) {
                    incCounter(colors, o.color)
                }
            }
            for (const [x, y] of region) {
                const o = p.cellObjects[x][y]
                if (o !== null && o.type == "octagram") {
                    if (colors[o.color] != 2) {
                        o.checkResult = false
                        r = false
                    }
                }
            }
        }

        return r
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