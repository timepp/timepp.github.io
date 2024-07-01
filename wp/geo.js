export function bound(k, a, b) {
    return k < a ? a : (k > b ? b : k)
}

/**
 * Get a point in rect((x1, y1) - (x2, y2)) frame that is nearest from given point (x, y) 
 * @param {number} x
 * @param {number} y 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 */
export function nearestPointInRectangle(x, y, x1, y1, x2, y2) {
    let leAll = (k, a, b, c) => k <= a && k <= b && k <= c
    const l1 = x - x1
    const l2 = x2 - x
    const l3 = y - y1
    const l4 = y2 - y
    if (leAll(l1, l2, l3, l4)) return [x1, bound(y, y1, y2)]
    if (leAll(l2, l3, l4, l1)) return [x2, bound(y, y1, y2)]
    if (leAll(l3, l4, l1, l2)) return [bound(x, x1, x2), y1]
    if (leAll(l4, l1, l2, l3)) return [bound(x, x1, x2), y2]
    // coundn't reach here
}

/**
 * Get one of the 4 corner points in rect((x1, y1) - (x2, y2)) that is nearest from given point (x, y) 
 * @param {number} x
 * @param {number} y 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 */
export function nearestCornerInRectangle(x, y, x1, y1, x2, y2) {
    return [
        x - x1 < x2 - x? x1 : x2,
        y - y1 < y2 - y? y1 : y2
    ]
}

/**
 * Get bouding rect in grid (mxn) for point (x,y)
 * @param {number} x 
 * @param {number} y 
 * @param {number} m 
 * @param {number} n 
 */
export function boundingRectInGrid(x, y, m, n) {
    // dx and dy are positive distance from min-value corner
    // the doubled % algorithm aims to resolve negative cases
    // e.g. for x == -33 and m = 10, we want 7 instead of -3
    const dx = (x % m + m) % m
    const dy = (y % n + n) % n
    return [x - dx, y - dy, x - dx + m, y - dy + n]
}

export function nearestPointInLineSegment(x, y, x1, y1, x2, y2) {
    const A = x2 - x1
    const B = y2 - y1

    if (A == 0 && B == 0) return [x1, y1]

    const dot = (x - x1) * A + (y - y1) * B
    const len2 = A * A + B * B
    const t = dot / len2;

    return [
        t < 0? x1 : (t > 1? x2 : x1 + t * A),
        t < 0? y1 : (t > 1? y2 : y1 + t * B)
    ]
}

export class Map {
    constructor() {
        this.nodes = []
        this.edges = []
    }

    addEdge(x1, y1, x2, y2) {
        let n1 = this.getOrCreateNode(x1, y1)
        let n2 = this.getOrCreateNode(x2, y2)
        n1.connects.push(n2)
        n2.connects.push(n1)
        this.edges.push([n1, n2])
    }

    getOrCreateNode(x, y) {
        for (const n of this.nodes) {
            if (n.x == x && n.y == y) return n
        }
        let n = {
            x: x,
            y: y,
            connects: []
        }
        this.nodes.push(n)
        return n
    }
}
