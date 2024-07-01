/**
 * 
 * @param {HTMLElement} e 
 * @param {{}} obj 
 */
export function createSettingPage(e, obj) {
    for (let p in obj) {
        let hint = document.createElement("span")
        let input = document.createElement("input")
        hint.textContent = p
        input.value = obj[p]
        input.onchange = function(o, p, e) {
            return function() {
                if (typeof obj[p] === "number") {
                    obj[p] = parseFloat(e.value)
                    if (isNaN(obj[p])) {
                        obj[p] = 0
                    }
                } else if (typeof obj[p] === "string") {
                    obj[p] = e.value + ""
                } else if (typeof obj[p] === "object" && obj[p] instanceof Array) {
                    obj[p] = JSON.parse("[" + e.value + "]")
                }
            }
        }(obj, p, input)
        e.append(hint)
        e.append(input)
        e.append(document.createElement("br"))
    }
}
