import * as util from "./util.js"
import * as shape from "./shape.js"
import * as ph from "perf_hooks"
import * as geo from "./geo.js"
import SAW from "./saw.js"
import test from "tape"

function f(i) {
    return i-1
}

function g(i) {
    return i+1
}

function testf() {
    console.log(ph.performance.now())
    let r = 0
    for (let [x,y] of util.range([1000, 1000])) {
        r += x + y
    }
    console.log(ph.performance.now(), r)
    r = 0
    for (let i = 0; i < 1000; i++) for (let j = 0; j < 1000; j++) {
        r += i + j
    }
    console.log(ph.performance.now(), r)

    r = 0
    for (let i = 0; i < 1000000; i++) {
        r += i
    }
    console.log(ph.performance.now(), r)
    r = 0
    for (let i of util.range2(0, 1000000)) {
        r += i
    }
    console.log(ph.performance.now(), r)
}

function testutil() {
    let a = [1,2,3,3]
    do {
        console.log(a)
    } while (util.nextPermutation(a))
}

function testShape() {
    let s = new shape.Shape(4, 4, 1)
    let ss = shape.shapesFromString("Z Z L L180")
    let r = shape.checkComposition(s, ss)
    console.log(r)
}

test("geo", t => {
    let rect = [10, 20, 60, 80]
    let cases = [
        [10, 20, 10, 20],
        [60, 80, 60, 80],
        [10, 80, 10, 80],
        [60, 20, 60, 20],
        [10, 30, 10, 30],
        [10, 15, 10, 20],
        [50, 20, 50, 20],
        [0, 0, 10, 20],
        [0, 40, 10, 40],
        [0, 90, 10, 80],
        [10, 90, 10, 80],
        [30, 90, 30, 80],
        [80, 90, 60, 80],
        [80, 60, 60, 60],
        [80, 0, 60, 20],
        [50, 0, 50, 20],
        [15, 30, 10, 30],
        [15, 21, 15, 20],
        [15, 77, 15, 80],
        [50, 40, 60, 40]
    ]
    for (const c of cases) {
        console.log(c)
        const [x, y, xe, ye] = c
        t.deepEqual(geo.nearestPointInRectangle(x, y, ...rect), [xe, ye])
    }

    t.deepEqual(geo.nearestPointInRectangle(10, 10, 0, 0, 0, 0), [0, 0])

    t.deepEqual(geo.nearestCornerInRectangle(100, 100, 0, 0, 10, 20), [10, 20])

    t.deepEqual(geo.nearestPointInLineSegment(0, 10, 0, 0, 10, 10), [5, 5])

    t.end()
})

test("saw", t => {
    let s = new SAW(2, 2)
    s.init(0, 0, 1, 1)

    const sd = s.getAllShiftData()
    console.log(sd)

    s.randomShift()
    console.log(s.path)

    s.randomShift()
    console.log(s.path)

    t.end()
})