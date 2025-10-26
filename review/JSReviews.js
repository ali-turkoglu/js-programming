var num = 100;

var num = 200;

let x = 10; // this is unique
//let x = 20;

console.log(x);

console.log("-------------------------------------");

let actualResult = "100.5";

let expectedResult = 100.5;

if (actualResult == expectedResult) {
  console.log("Test passed!");
} else {
  console.log("Test failed!");
}
// === is failed because it checks both value and type
// == is successful because it only checks value

console.log("--------------------------------------");

let browser = "chrome";

if (browser === "chrome") {
  console.log("Chrome is a valid browser.");
} else if (browser === "firefox") {
  console.log("Firefox is a valid browser.");
} else if (browser === "safari") {
  console.log("Safari is a valid browser.");
} else {
  console.log("Invalid browser.");
}

console.log("---------------------------------------");

browser = "safari";

switch (browser) {
  case "chrome":
    console.log("Chrome is a valid browser.");
    break;
  case "firefox":
    console.log("Firefox is a valid browser.");
    break;
  case "safari":
    console.log("Safari is a valid browser.");
    break;
  default:
    console.log("Invalid browser.");
}

console.log("---------------------------------------");

for (let i = 0; i < 5; i++) {
  console.log(i + 1 + ". step= i is " + i);
}

console.log("---------------------------------------");
// it is not possible to see infinite loop in console with for of loop
let names = ["Joe", "Anna", "David", "Emily", "Michael"];

for (let each of names) {
  console.log(each);
}

console.log("---------------------------------------");

let s = "abcdef12345ghijklm5678";

s.replace(/\d/g, "");//  abcdefghijklm
console.log(s);  // abcdef12345ghijklm5678

/*
/d 
a
*/

console.log("---------------------------------------");

let expectedTitle ="Self Enrollment Portal";
let actualTitle = "self enrollment portal";

console.log(expectedTitle === actualTitle); // false
console.log(expectedTitle.toLowerCase() === actualTitle.toLowerCase()); // true

console.log("---------------------------------------");

console.log(`The Expected Title is ${expectedTitle}`);

console.log("------------------------------");

let countriesDropDown=["USA","Canada","UK","France","Germany"];

console.log(countriesDropDown[0]);

for (let each of countriesDropDown) {
    console.log(each);
}
console.log(countriesDropDown.length===5);

console.log("------------------------------");

/*
Create a function  that can reverse a string or array.
   fuction takes a string as  an argument and returns the reversed version of it.
*/
function reverseString(str) {
    let reversedStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reverseString("Hello World"));

console.log("------------------------------");

const{square, cube} = require("./Utility.js");
//let{square, cube} = require("./Utility.js");
//import {calculate, cube} from "./Utility.js"; ==> we use this


console.log("-------------------------------");

