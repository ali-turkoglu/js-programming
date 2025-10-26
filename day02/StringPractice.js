let school = "Benedict";
console.log(school);
console.log(typeof school);

console.log(school.length);

console.log(school.charAt(0)); // erstes Zeichen

console.log(school[0]); // erstes Zeichen

console.log(school[school.length - 1]); // letztes Zeichen

console.log("----------------------------------");

for (let i = 0; i <= school.length - 1; i++) {
  console.log(school[i]);
}

console.log("--------------------------");

school = school.toLowerCase(); // "benedict"
school = school.toUpperCase(); // "BENEDICT"

console.log("-------------------------");

let expectedResult = "JS";
let actualResult = "js";

console.log(expectedResult === actualResult); // false
console.log(expectedResult.toLowerCase() === actualResult.toLowerCase()); // true

let str = "python python";

str = str.replace("python", "javascript");
//str = str.replace(/python/g, "javascript"); --> global flag
// alle Python-Übereinstimmungen ändern sich
console.log(str);

console.log("-----------------------------");

let email = "benedictschool@gmail.com";
let domain = email.substring(email.indexOf("@")+1,email.indexOf("."));

console.log(domain);

console.log("------------------------------");

// + oder `${}`
let employeeName="James";
let emplozyeeSalary=100_000;

console.log(`Mein name ist ${employeeName} und mein Gehalt getragt ${emplozyeeSalary} euro.`);

