/*const utility = require("./Utility.js");

let result = utility.square(5);
console.log("Square of 5: ", result);

result = utility.cube(3);
console.log("Cube of 3: ", result);

result = utility.calculate(5, 10, "-");
console.log("Subtraction: 5 - 10 = ", result);
*/

const{calculate,cube} = require("./Utility.js");

console.log("Addition: 5 + 10 = ", calculate(5, 10, "+"));

console.log("Cube of 3: ", cube(3));