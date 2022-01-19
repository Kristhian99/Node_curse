const names = require("./test2")
const puto = require("./name_function")
const data = require("./exports_test")

console.log(data[1]);

puto(names.Alan)
puto(names.Diego)
puto("Maria")