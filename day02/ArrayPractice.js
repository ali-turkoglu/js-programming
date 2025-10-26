
let element=["java",1,2,3,true,false,"Python",2.3];

console.log(element);

console.log("-----------------------------------------");

let students=["Mykola","Yulia","John"];

for (let student of students) {
    console.log(student);
}

console.log("--------------------------------------");

console.log(students[2]);
console.log(students.length);
students[1]="Ali";

console.log(students);
students.push("Isabella");
console.log(students);

students.unshift("Lee");
console.log(students);

console.log("-------------------------");

students.shift();
console.log(students);

students.pop();
console.log(students);