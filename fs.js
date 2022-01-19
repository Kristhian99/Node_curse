const {writeFileSync , readFileSync} = require('fs');

const first = readFileSync('./ets/t1.txt', 'utf8')
const second = readFileSync('./ets/t2.txt', 'utf8')

console.log(first)
console.log(second)

writeFileSync('./ets/t1.txt', ` ${second}`)
