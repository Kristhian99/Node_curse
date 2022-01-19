const path = require("path")

console.log(path.sep)

const filepath=path.join("ets/","esd","ds.txt")
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute=path.resolve(__dirname,"ets","esd","ds.txt")
console.log(absolute)       