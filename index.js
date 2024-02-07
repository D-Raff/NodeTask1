// we accessed the function/variable inside the addition file, not the actual file
const {addition} = require('./addition')
const {subtraction} = require('./subtraction')

console.log(addition(3,6));
console.log(subtraction(7,3));