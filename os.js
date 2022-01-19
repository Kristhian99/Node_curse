const Os= require("os")

console.log(Os);

const object = {
    frememory: Os.freemem(),
    platform: Os.platform(),
    memory: Os.totalmem(),
    version: Os.version(),
}
console.log(object);