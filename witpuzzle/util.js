export function ndarray(dimensions, initval) {
    let createArray = function(dimensions, index, initval) {
        let d = dimensions[index]
        let arr = new Array(d)
        if (index < dimensions.length - 1) {
            for (let i = 0; i < d; i++) {
                arr[i] = createArray(dimensions, index + 1, initval)
            }
        } else {
            arr.fill(initval)
        }
        return arr
    }

    return createArray(dimensions, 0, initval)
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/// range(4) -> 0 1 2 3
/// range(2,4) -> 2 3
/// range([2,2]) -> [0,0], [0,1], [1,0], [1,1]
/// range([1,1],[3,3]) -> [1,1], [1,2], [2,1], [2,2]
export function* range(a, b) {
    if (typeof a === "number") {
        if (b === undefined) [a,b] = [0,a]
        const step = a < b ? 1 : -1;
        for (let i = a; i != b; i += step) {
            yield i
        }
    } else { // array case
        const dim = a.length
        if (b === undefined) [a,b] = [new Array(dim).fill(0), a]
        const step = a.map((v,i)=> v<b[i]?1:-1)
        // [1,2,3]->[5,6,7]
        let v = [...a]
        while (true) {
            yield v
            let i = a.length-1
            for (; i >= 0; i--) {
                if (v[i] != b[i] - step[i]) break
            }
            if (i == -1) break
            v[i] += step[i]
            for (i++; i < a.length; i++) {
                v[i] = a[i]
            }
        }
    }
}

export function* range2(a, b) {
    for (let i = a; i != b; i ++) {
        yield i
    }
}

export function reverse(arr, i, j) {
    for (let a = i, b = j; a < b; a++, b--) {
        [arr[a], arr[b]] = [arr[b], arr[a]]
    }
}

/**
 * 
 * @param {[]} arr: array of objects, the objects need to support ordering
 * @param {function(a, b) => boolean} less: 
 */
export function nextPermutation(arr, less = (a,b)=>a<b) {
    for (let i = arr.length - 2; i >= 0; i--) {
        // find rightmost element that is smaller than successor
        if (less(arr[i], arr[i+1])) {
            let k = arr.length
            do {
                k--
            } while (!less(arr[i], arr[k]))
            [arr[i], arr[k]] = [arr[k], arr[i]]
            reverse(arr, i+1, arr.length-1)
            return true
        }
    }

    reverse(arr, 0, arr.length-1)
    return false
}

export function incCounter(obj, p) {
    if (p in obj) {
        obj[p]++
    } else {
        obj[p] = 1
    }
}