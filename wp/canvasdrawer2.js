import {Puzzle} from "./main.js"
import * as geo from "./geo.js"

/**
 * CanvasDrawer2: use more common way to render "map" and track path along it
 * - map is a set of vertexes and edges. 
 * - A vertex contains its location (x, y) and An edge connect 2 vertexes
 * - A path is a list of vertexes, with an edge exist to link every adjacent vertexes
 * - the last element of the path is not necessarily the vertexes
 * - on mouse move, find the point in map nearest the mouse point and find a subpath link the last element 
 *   in map and that mouse point, add the new subpath to path
 * - 
 */

export class CanvasDrawer {

    /**
     * 
     * @param {Puzzle} puzzle 
     * @param {*} e 
     * @param {*} cw 
     * @param {*} ch 
     * @param {*} rw 
     * @param {*} rh 
     * @param {*} cc 
     * @param {*} rc 
     * @param {*} lc 
     * @param {*} colorTheme 
     */
    constructor(puzzle, e, cw, ch, rw, rh, cc, rc, lc, colorTheme) {
        this.elem = e
        this.ctx = e.getContext("2d");
        this.cw = cw
        this.ch = ch
        this.rw = rw
        this.rh = rh
        this.cc = cc
        this.rc = rc
        this.lc = lc
        this.colorTheme = colorTheme
        this.tx = 50
        this.ty = 50
        this.ctx.translate(this.tx, this.ty)
        this.puzzle = puzzle
        this.path = []
        this.walking = false
        this.direction = []

        this.draw(this.puzzle)
        this.registerListeners()
    }

    translate(p) {
        return [p[0] * this.cw, p[1] * this.ch]
    }

    screenToClient(x, y) {
        return [
            x - this.elem.getBoundingClientRect().left - this.tx,
            y - this.elem.getBoundingClientRect().top - this.ty
        ]
    }

    /**
     * 
     * @param {Puzzle} puzzle 
     */
    draw(puzzle) {
        this.drawBoard(puzzle.m, puzzle.n)
        this.drawFrame()
        this.drawCellObjects(puzzle.cellObjects, puzzle.m, puzzle.n)
    }
    
    drawFrame() {
        let puzzle = this.puzzle
        this.drawRoad()
        this.drawStartPoint(puzzle.config.startPoint, this.rc)
        this.drawEndPoint(puzzle.config.endPoint, puzzle.m, puzzle.n)
    }

    registerListeners() {
        const cd = this
        this.elem.addEventListener("click", function(event){
            cd.onClick(event)
        })
        this.elem.addEventListener("mousemove", function(event){
            cd.onMouseMove(event)
        })
    }

    onClick(event) {
        console.log(event)
        if (event.pageX < 20) {
            // drawsolution
            this.drawPath(this.puzzle.path.map(v => [v[0] * this.cw, v[1] * this.ch]))
            return
        }

        if (this.walking) {
            this.walking = false
            this.path = []
            this.draw(this.puzzle)
            return
        }
        
        const [x, y] = this.screenToClient(event.pageX, event.pageY)

        // check start points
        let p = this.translate(this.puzzle.config.startPoint)
        if (this.insideStartPoint(x, y)) {
            console.log("walking")
            this.walking = true
            this.path.push(this.translate(this.puzzle.config.startPoint))
            this.drawPath(this.path)
        }
    }

    onMouseMove(event) {
        if (!this.walking) return

        let path = this.path
        const [m, n] = [this.puzzle.m, this.puzzle.n]
        const [x, y] = this.screenToClient(event.pageX, event.pageY)
        let p0 = path[path.length - 1]
        let p1 = path.length > 1 ? path[path.length - 2] : [-1, -1]
        let p2 = path.length > 2 ? path[path.length - 3] : [-1, -1]
        const [x0, y0] = p0
        const [x1, y1] = p1
        const [x2, y2] = p2

        // find the point in the grid(xg, yg) that is nearest to [x,y]
        const [xg, yg] = this.findNearestPointInGrid(this.puzzle.m, this.puzzle.n, this.cw, this.ch, x, y)

        console.log(m, n, x, y, x0, y0, x1, y1, x2, y2, xg, yg)

        // reduce point on way backing
        if (this.path.length > 2 && (x2 == x1 && x1 == xg || y2 == y1 && y1 == yg)) {
            this.path.pop()
            this.path.pop()
            this.path.push([xg, yg])
            this.drawFrame()
            this.drawPath(this.path)
            return
        }

        // then check if there can be a direct line from (xp, yp) to (xg, yg)
        if (this.path.length > 1 && (x1 == xg || y1 == yg)) {
            p0[0] = xg
            p0[1] = yg
            this.drawFrame()
            this.drawPath(this.path)
            return
        }

        // if no, check if there can be a direct line from (xc, yc) to (x, y), 
        // where (xc, yc) is the cross point near (x0, y0)
        const [xc, yc] = this.findNearestCrossInGrid(m, n, this.cw, this.ch, x0, y0)
        if (this.distanceLess([xc, yc], [x0, y0], this.rw * 11.5)) {
            if (xc == xg || yc == yg) {
                p0[0] = xc
                p0[1] = yc
                this.path.push([xg, yg])
                this.drawFrame()
                this.drawPath(this.path)
                return
            }
        }
    }

    drawStartPoint(p, style) {
        this.ctx.fillStyle = style
        this.ctx.beginPath()
        this.ctx.arc(p[0] * this.cw, p[1] * this.ch, this.rw * 1.5, 0, 2 * Math.PI)
        this.ctx.fill()
    }

    drawCellObjects(arr, m, n) {
        for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) {
            this.drawCellObject(arr[i][j], i, j)
        }
    }

    drawCellObject(obj, i, j) {
        if (obj && obj.type === "triangle") {
            const n = obj.value
            const h = this.ch / 6
            const w = this.cw / 6
            const g = this.cw / 12
            const l = w * n + g * (n-1)
            const dx = (this.cw - l) / 2
            const dy = (this.ch - h) / 2
            for (let k = 0; k < n; k++) {
                const x = i * this.cw + dx + k * (w + g)
                const y = j * this.ch + dy
                this.drawTriangle(x, y, x + w, y + h, this.colorTheme[obj.color])
            }
        }
    }

    drawTriangle(x1, y1, x2, y2, color) {
        let ctx = this.ctx
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.moveTo((x1+x2)/2, y1)
        ctx.lineTo(x1, y2)
        ctx.lineTo(x2, y2)
        ctx.fill()
    }

    drawEndPoint(p, m, n) {
        let ctx = this.ctx
        const [x,y] = p
        ctx.strokeStyle = this.rc
        ctx.lineJoin = "round"
        ctx.lineCap = "round"
        ctx.lineWidth = this.rw
        ctx.beginPath()
        ctx.moveTo(x * this.cw, y * this.ch)
        let l = this.rw
        let dx = x == 0? -l : (x == m? l : 0)
        let dy = y == 0? -l : (y == n? l : 0)
        ctx.lineTo((x)*this.cw+dx, (y)*this.ch+dy)
        ctx.stroke() 
    }

    drawBoard(m, n) {
        const ctx = this.ctx
        const [cw, ch, rw, rh] = [this.cw, this.ch, this.rw, this.rh]
        
        ctx.fillStyle = this.cc
        ctx.fillRect(0, 0, cw * m, ch * n)
    }

    drawRoad() {
        let [ctx, m, n] = [this.ctx, this.puzzle.m, this.puzzle.n]
        ctx.strokeStyle = this.rc
        ctx.lineJoin = "round"
        ctx.lineCap = "round"
        ctx.lineWidth = this.rw
        ctx.beginPath()
        for (let i = 0; i < m + 1; i++) {
            ctx.moveTo(i * this.cw, 0)
            ctx.lineTo(i * this.cw, n * this.ch)
        }
        for (let j = 0; j < n + 1; j++) {
            ctx.moveTo(0, j * this.ch)
            ctx.lineTo(m * this.cw, j * this.ch)
        }
        ctx.stroke()
    }

    drawPath(path) {
        let ctx = this.ctx
        ctx.strokeStyle = this.lc
        const [cw, ch] = [this.cw, this.ch]
        this.drawStartPoint(path[0], this.lc)
        ctx.beginPath()
        ctx.moveTo(path[0][0], path[0][1])
        for (let i = 1; i < path.length; i++) {
            const [x, y] = path[i]
            ctx.lineTo(x, y)
        }
        ctx.stroke()
    }

    insideStartPoint(x, y) {
        let p = this.translate(this.puzzle.config.startPoint)
        return this.distanceLess([x, y], p, this.rw*1.5)
    }

    distanceLess(p1, p2, d) {
        return this.distance2(p1, p2) < d * d
    }

    distance2(p1, p2) {
        return (p2[0] - p1[0]) * (p2[0] - p1[0]) + (p2[1] - p1[1]) * (p2[1] - p1[1])
    }

    findNearestCrossInGrid(m, n, cw, ch, x, y) {
        let [x1, y1, x2, y2] = geo.boundingRectInGrid(x, y, cw, ch)
        x1 = geo.bound(x1, 0, m * cw)
        x2 = geo.bound(x2, 0, m * cw)
        y1 = geo.bound(y1, 0, n * ch)
        y2 = geo.bound(y2, 0, n * ch)
        return geo.nearestCornerInRectangle(x, y, x1, y1, x2, y2)
    }

    findNearestPointInGrid(m, n, cw, ch, x, y) {
        let [x1, y1, x2, y2] = geo.boundingRectInGrid(x, y, cw, ch)
        x1 = geo.bound(x1, 0, m * cw)
        x2 = geo.bound(x2, 0, m * cw)
        y1 = geo.bound(y1, 0, n * ch)
        y2 = geo.bound(y2, 0, n * ch)
        return geo.nearestPointInRectangle(x, y, x1, y1, x2, y2)
    }
}