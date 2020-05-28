import {Puzzle} from "./main.js"
import * as geo from "./geo.js"

export class CanvasDrawer {

    /**
     * 
     * @param {Puzzle} puzzle 
     * @param {HTMLElement} e 
     * @param {*} cw 
     * @param {*} ch 
     * @param {*} rw 
     * @param {*} cc 
     * @param {*} rc 
     * @param {*} lc 
     * @param {*} colorTheme 
     */
    constructor(e, cc, rc, lc, colorTheme) {
        this.elem = e
        /** @type {CanvasRenderingContext2D} */
        this.ctx = e.getContext("2d");
        this.cc = cc
        this.rc = rc
        this.lc = lc
        this.colorTheme = colorTheme
        this.saw = true // self avoiding walk. 

        this.puzzle = null
        this.path = []
        this.walking = false
        this.completing = false

        this.cw = 0
        this.ch = 0
        this.rw = 0
        this.tx = 0
        this.ty = 0
        this.endPoint = []

        this.registerListeners()
    }

    translate(p) {
        return [p[0] * this.cw, p[1] * this.ch]
    }

    screenToClient(x, y) {
        let r = [
            x - this.elem.getBoundingClientRect().left - this.tx,
            this.elem.clientWidth - (y - this.elem.getBoundingClientRect().top + this.ty)
        ]
        console.log("screen to client: ", x, y, "=> ", r)
        return r
    }

    setPuzzle(puzzle) {
        const e = this.elem
        this.puzzle = puzzle
        this.path = []
        this.walking = false
        this.completing = false

        this.cw = Math.floor(e.clientWidth / puzzle.m * 0.8)
        this.ch = this.cw
        this.rw = Math.floor(e.clientWidth / puzzle.m * 0.15)
        this.tx = Math.floor(e.clientWidth * 0.1)
        this.ty = this.tx
        this.endPoint = this.getEndPoint()
        this.ctx.resetTransform()
        this.ctx.translate(this.tx, e.clientWidth - this.ty)
        this.ctx.scale(1, -1)
        this.draw(this.puzzle)
    }

    /**
     * 
     * @param {Puzzle} puzzle 
     */
    draw(puzzle) {
        this.drawBoard()
        this.drawFrame()
        this.drawCellObjects(puzzle.cellObjects, puzzle.m, puzzle.n)
    }

    drawSolution() {
        this.drawFrame()
        this.drawPath(this.puzzle.path.map(v => [v[0] * this.cw, v[1] * this.ch]))
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
            cd.onSolveMoving(event.pageX, event.pageY)
        })

        this.elem.addEventListener("touchstart", function(event){
            cd.onTouchStart(event)
        })
        this.elem.addEventListener("touchmove", function(event){
            cd.onTouchMove(event)
        })
        this.elem.addEventListener("touchend", function(event){
            cd.onTouchEnd(event)
        })
    }

    onTouchStart(event) {
        console.log(event)
        event.preventDefault()
        let t = event.changedTouches[0]

        const [x, y] = this.screenToClient(t.clientX, t.clientY)

        // check start points
        let p = this.translate(this.puzzle.config.startPoint)
        if (this.insideStartPoint(x, y)) {
            console.log("walking")
            if (this.walking) {
                this.walking = false
                this.completing = false
                this.path = []
                this.draw(this.puzzle)
                return
            }
            this.walking = true
            this.path = [p, [...p]]
            this.drawPath(this.path)
        }
    }

    onTouchMove(event) {
        event.preventDefault()
        let t = event.changedTouches[0]
        this.onSolveMoving(t.clientX, t.clientY)
    }

    onTouchEnd(event) {
        event.preventDefault()
        if (this.completing) {
            // check solution
            this.walking = false
            let fullPath = this.getFullPath()
            const r = this.puzzle.checkPath(fullPath)
            if (r) {
                this.drawPath(this.path, "rgb(0, 255, 0)")
            } else {
                this.drawPath(this.path, "rgb(255, 0, 0)")
                this.drawCellObjects(this.puzzle.cellObjects, this.puzzle.m, this.puzzle.n, true)
            }
            console.log("full path: ", JSON.stringify(fullPath))
        }
    }

    onClick(event) {
        console.log(event)
        if (this.completing) {
            // check solution
            this.walking = false
            let fullPath = this.getFullPath()
            const r = this.puzzle.checkPath(fullPath)
            if (r) {
                this.drawPath(this.path, "rgb(0, 255, 0)")
            } else {
                this.drawPath(this.path, "rgb(255, 0, 0)")
                this.drawCellObjects(this.puzzle.cellObjects, this.puzzle.m, this.puzzle.n, true)
            }
            console.log("full path: ", JSON.stringify(fullPath))
        }

        if (this.walking) {
            this.walking = false
            this.path = []
            this.draw(this.puzzle)
            return
        }
        
        const [x, y] = this.screenToClient(event.clientX, event.clientY)

        // check start points
        let p = this.translate(this.puzzle.config.startPoint)
        if (this.insideStartPoint(x, y)) {
            console.log("walking")
            this.walking = true
            this.path = [p, [...p]]
            this.drawPath(this.path)
        }
    }

    onSolveMoving(pageX, pageY) {
        if (!this.walking) return

        console.log(JSON.stringify(this.path))

        let path = this.path
        const [m, n] = [this.puzzle.m, this.puzzle.n]
        const [x, y] = this.screenToClient(pageX, pageY)
        let p0 = path[path.length - 1]
        let p1 = path.length > 1 ? path[path.length - 2] : [-1, -1]
        let p2 = path.length > 2 ? path[path.length - 3] : [-1, -1]
        const [x0, y0] = p0
        const [x1, y1] = p1
        const [x2, y2] = p2

        // find the point in the grid(xg, yg) that is nearest to [x,y]
        const [xg, yg] = this.findNearestPointInMap(x, y)

        // check exit case
        if (xg > this.cw * m || yg > this.ch * n) {
            const p = this.puzzle.config.endPoint
            const [xe, ye] = [p[0] * this.cw, p[1] * this.ch]
            if (x1 == xe && y1 == ye) {
                p0[0] = xg
                p0[1] = yg
            } else {
                this.path.pop()
                this.path.push([xe, ye])
                this.path.push([xg, yg])
            }
            this.drawFrame()
            this.completing = true

            const style = this.completing ? "rgb(255,255,255)" : undefined
            this.drawPath(this.path, style)
            return
        }

        this.completing = false


        //console.log(m, n, x, y, x0, y0, x1, y1, x2, y2, xg, yg)

        // reduce point on way backing
        if (this.path.length > 2 && (x2 == x1 && x1 == xg || y2 == y1 && y1 == yg)) {
            this.path.pop()
            this.path.pop()
            this.path.push([xg, yg])
            this.drawFrame()
            this.drawPath(this.path)
            return
        }

        // then check if there can be a direct line from (x1, y1) to (xg, yg)
        if (this.path.length > 1 && (x1 == xg || y1 == yg)) {
            // but if there are crosses blocking in the middle we need to avoid self cross 
            let [xn, yn] = [xg, yg]
            if (this.saw) {
                [xn, yn] = this.findMaxEndPointAvoidingSelfCross(x1, y1, xg, yg)
            }
            
            p0[0] = xn
            p0[1] = yn
            this.drawFrame()
            this.drawPath(this.path)
            return
        }

        // if no, check if there can be a direct line from (x0, y0) to (xc, yc) to (xg, yg), 
        // where (xc, yc) is a cross point
        let [xc, yc] = [-1, -1]
        if (xg % this.cw == 0 && y0 % this.ch == 0) {
            [xc, yc] = [xg, y0]
        } else if (yg % this.ch == 0 && x0 % this.cw == 0) {
            [xc, yc] = [x0, yg]
        }
        if (xc != -1 && yc != -1) {
            if (this.saw) {
                let [xn, yn] = this.findMaxEndPointAvoidingSelfCross(x1, y1, xc, yc)
                p0[0] = xn
                p0[1] = yn
                if (xn == xc && yn == yc) {
                    let [xnn, ynn] = this.findMaxEndPointAvoidingSelfCross(xn, yn, xg, yg)
                    this.path.push([xnn, ynn])
                }
            }
            else {
                this.path.pop()
                this.path.push([xc, yc])
                this.path.push([xg, yg])
            }

            this.drawFrame()
            this.drawPath(this.path)
            return
        }
    }

    drawStartPoint(p, style) {
        this.ctx.fillStyle = style
        this.ctx.beginPath()
        this.ctx.arc(p[0] * this.cw, p[1] * this.ch, this.rw * 1.5, 0, 2 * Math.PI)
        this.ctx.fill()
    }

    drawCellObjects(arr, m, n, showCheckResult) {
        for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) {
            this.drawCellObject(arr[i][j], i, j, showCheckResult)
        }
    }

    drawCellObject(obj, i, j, showCheckResult) {
        if (!obj) return
        const color = showCheckResult && !obj.checkResult? "rgb(255,0,0)" : this.colorTheme[obj.color]
        if (obj.type === "triangle") {
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
                this.drawTriangle(x, y, x + w, y + h, color)
            }
        } else if (obj.type === "square") {
            let ctx = this.ctx
            const w = this.cw / 3
            const dx = (this.cw - w) / 2
            const dy = (this.ch - w) / 2
            ctx.fillStyle = color
            ctx.fillRect(i * this.cw + dx, j * this.ch + dy, w, w)
        }
    }

    drawTriangle(x1, y1, x2, y2, color) {
        let ctx = this.ctx
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.moveTo((x1+x2)/2, y2)
        ctx.lineTo(x1, y1)
        ctx.lineTo(x2, y1)
        ctx.fill()
    }

    drawSquare(x1, y1, x2, y2, color) {
        let ctx = this.ctx
        ctx.fillStyle = color
        ctx.fillRect()
    }

    drawEndPoint(p, m, n) {
        let ctx = this.ctx
        const [x,y] = this.puzzle.config.endPoint
        const [x1, y1] = this.endPoint
        ctx.strokeStyle = this.rc
        ctx.lineJoin = "round"
        ctx.lineCap = "round"
        ctx.lineWidth = this.rw
        ctx.beginPath()
        ctx.moveTo(x * this.cw, y * this.ch)
        ctx.lineTo(x1, y1)
        ctx.stroke() 
    }

    drawBoard() {
        this.ctx.fillStyle = this.cc
        this.ctx.fillRect(0, 0, this.cw * this.puzzle.m, this.ch * this.puzzle.n)
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

    drawPath(path, style) {
        if (style === undefined) style = this.lc
        let ctx = this.ctx
        ctx.strokeStyle = style
        const [cw, ch] = [this.cw, this.ch]
        this.drawStartPoint(path[0], style)
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

    getEndPoint() {
        const [x,y] = this.puzzle.config.endPoint
        const m = this.puzzle.m
        const n = this.puzzle.n
        let l = this.rw
        let dx = x == 0? -l : (x == m? l : 0)
        let dy = y == 0? -l : (y == n? l : 0)
        return [x*this.cw+dx, y*this.ch+dy]
    }

    findNearestPointInMap(x, y) {
        // exit point first
        const p = this.puzzle.config.endPoint
        const [x1, y1] = [p[0] * this.cw, p[1] * this.ch]
        const [x2, y2] = this.endPoint
        const [x0, y0] = geo.nearestPointInLineSegment(x, y, x1, y1, x2, y2)
        if (x0 != x1 || y0 != y1) {
            if (this.distance2([x0, y0], [x, y]) < this.rw * this.rw * 2) {
                return [x0, y0]
            }
        }

        return this.findNearestPointInGrid(this.puzzle.m, this.puzzle.n, this.cw, this.ch, x, y)
    }

    findNearestPointInGrid(m, n, cw, ch, x, y) {
        let [x1, y1, x2, y2] = geo.boundingRectInGrid(x, y, cw, ch)
        x1 = geo.bound(x1, 0, m * cw)
        x2 = geo.bound(x2, 0, m * cw)
        y1 = geo.bound(y1, 0, n * ch)
        y2 = geo.bound(y2, 0, n * ch)
        return geo.nearestPointInRectangle(x, y, x1, y1, x2, y2)
    }

    findMaxEndPointAvoidingSelfCross(x1, y1, x2, y2) {
        const gap = this.rw + 5
        if (x1 == x2) {
            if (y1 < y2) {
                for (let y = y1 - y1 % this.ch + this.ch; y <= y2 - y2 % this.ch + this.ch; y += this.ch) {
                    if (this.pointInPath(x1, y)) {
                        return [x2, Math.min(y2, y - gap)]
                    }
                }
            } else {
                for (let y = y1 - y1 % this.ch - this.ch; y >= y2 - y2 % this.ch; y -= this.ch) {
                    if (this.pointInPath(x1, y)) {
                        return [x2, Math.max(y + gap, y2)]
                    }
                }
            }
        }
        if (y1 == y2) {
            if (x1 < x2) {
                for (let x = x1 - x1 % this.cw + this.cw; x <= x2 - x2 % this.cw + this.cw; x += this.cw) {
                    if (this.pointInPath(x, y1)) {
                        return [Math.min(x - gap, x2), y2]
                    }
                }
            } else {
                for (let x = x1 - x1 % this.cw - this.cw; x >= x2 - x2 % this.cw; x -= this.cw) {
                    if (this.pointInPath(x, y1)) {
                        return [Math.max(x + gap, x2), y2]
                    }
                }
            }            
        }

        return [x2, y2]
    }

    middleCrosses(x1, y1, x2, y2) {
        if (x1 == x2) {
            return this.middleAlignments(y1, y2, this.ch).map(v => [x1, v])
        } else {
            return this.middleAlignments(x1, x2, this.cw).map(v => [v, y1])
        }
    }
    
    middleAlignments(x1, x2, w) {
        let r = []
        if (x1 < x2) {
            for (let x = x1 - x1 % w + w; x < x2; x += w) r.push(x)
        } else {
            for (let x = x1 - x1 % w - w; x > x2; x -= w) r.push(x)
        }
        return r
    }

    pointInPath(x, y) {
        for (let i = 0; i < this.path.length-2; i++) {
            const [x1, y1] = this.path[i]
            const [x2, y2] = this.path[i+1]
            if (this.pointInLineSegment(x, y, x1, y1, x2, y2)) return true
        }
        return false
    }

    getFullPath() {
        let path = [this.path[0].slice()]
        for (let i = 0; i < this.path.length-2; i++) {
            const [x1, y1] = this.path[i]
            const [x2, y2] = this.path[i+1]
            path.push(...this.middleCrosses(x1, y1, x2, y2))
            path.push([x2, y2])
        }
        return path.map(v => [v[0] / this.cw, v[1] / this.ch])
    }

    /// limit: x1 == x2 || y1 == y2
    pointInLineSegment(x, y, x1, y1, x2, y2) {
        if (x1 == x2 && x == x2) {
            return y1 <= y && y <= y2 || y2 <= y && y <= y1
        }
        if (y1 == y2 && y == y2) {
            return x1 <= x && x <= x2 || x2 <= x && x <= x1
        }
        return false
    }
}