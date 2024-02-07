// module is a file that contains related content. a variable with a global scope is not a module
// the below is for exporting multiple things.
function addition (a, b){
    return a + b
}

module.exports = {
    addition
}

// shorthand
// exports.addition = (a, b)=>{
//     return a + b
// }