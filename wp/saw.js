/** SAW (self avoiding walk) generation
 *  by random shifts based on the initial path
 */

export default class SAW {
    /**
     * 
     * @param {number} m: grid count at X direction 
     * @param {number} n: grid count at Y direction
     */
    constructor(m, n) {
        this.M = m
        this.N = n
        this.path = []
    }

    /// Init path from (x1, y1) to (x2 y1) to (x2, y2)
    init(x1, y1, x2, y2) {
        const stepx = Math.sign(x2 - x1)
        const stepy = Math.sign(y2 - y1)
        for (let i = x1; i < x2; i += stepx) {
            this.path.push([i, y1])
        }
        for (let j = y1; j < y2; j += stepy) {
            this.path.push([x2, j])
        }
        this.path.push([x2, y2])
    }

    indexOf(x, y) {
        for (let i = 0; i < this.path.length; i++) {
            if (this.path[i][0] == x && this.path[i][1] == y) {
                return i
            }
        }
        return -1
    }

    randomShift(filterFunc) {
        let edges = this.getAllShiftData()
        if (filterFunc) edges = edges.filter(filterFunc)

        if (edges.length == 0) return false

        let i = Math.floor(Math.random() * edges.length)
        let e = edges[i] 
        this.shift(e)
        return true
    }

    shift(e) {
        //console.log(e)
        if (e.type == 0) this.path.splice(e.index + 1, 0, e.q1, e.q2)
        if (e.type == 1) this.path.splice(e.index, 1, e.q2)
        if (e.type == 2) this.path.splice(e.index + 1, 1, e.q1)
        if (e.type == 3) this.path.splice(e.index, 2)
    }

    getAllShiftData() {
        const data = []
        for (let i = 0; i < this.path.length - 1; i++) {
            for (let dir = -1; dir <= 1; dir += 2) { // [-1, 1]
                const d = this.getShiftData(i, dir)
                if (d !== null) data.push(d)
            }
        }
        return data
    }

    /// get shift data: target points and type
    /// shiftdata: {index:2, q1, q2, type: 0/1/2/3}
    getShiftData(c, d) {
        const p1 = this.path[c]
        const p2 = this.path[c+1]
        const sx = Math.sign(p2[0] - p1[0])
        const sy = Math.sign(p2[1] - p1[1])
        const q1 = [p1[0] + d * sy, p1[1] + d * sx]
        const q2 = [p2[0] + d * sy, p2[1] + d * sx]
    
        if (q1[0] < 0 || q1[0] >= this.M || 
            q1[1] < 0 || q1[1] >= this.N) return null

        const iq1 = this.indexOf(q1[0], q1[1]);
        const iq2 = this.indexOf(q2[0], q2[1]);

        // target point type:
        // available / neighbour / occupied
        let t1 = iq1 == -1 ? 0 : (iq1 == c-1)? 1 : 2
        let t2 = iq2 == -1 ? 0 : (iq2 == c+2)? 1 : 2

        if (t1 == 2 || t2 == 2) return null

        return {
            index: c,
            q1: q1,
            q2: q2,
            type: t1 + t2*2
        }
    }
}
