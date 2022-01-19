const lodash = require('lodash');

const test1=[1,[2,[3,[4]]]]
const test2=lodash.flattenDeep(test1);

console.log(test2);