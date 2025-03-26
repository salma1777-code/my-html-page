require("./scripts.js")

function oldestLivingScript(scripts) {
    return scripts.reduce((oldest, current) => {
        if (current.year > oldest.year) return current
        else return oldest
    })
}

console.log(oldestLivingScript(SCRIPTS))


function average(array) {
    return array.reduce((a, b) => a + b) / array.length
}

console.log(Math.round(average(SCRIPTS.filter(script => script.living).map(script => script.year))))
console.log(Math.round(average(SCRIPTS.filter(script => !script.living).map(script => script.year))))

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => count + (to - from), 0)
}
console.log(Math.round(average(SCRIPTS.map(characterCount))))