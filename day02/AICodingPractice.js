// Create a new array of strings mit let and add 10 element with employee names to it. And use " instead ' to create Strings.
let employees = ["John Smith", "Jane Doe", "Mike Johnson", "Sarah Williams", "Emma Brown", "David Jones", "Michael Davis", "Lisa Miller", "Daniel Wilson", "Sophia Moore"];

// print the array
console.log(employees);

//change the second element of the array as Mykola Babak 
employees[1] = "Mykola Babak";

// add a new element "Kuzzat" to the third position
employees.splice(2, 0, "Kuzzat");

console.log(employees);

console.log("----------------------------");

// create a loop to print each element in alphabetical order
for (let employee of employees.sort()) {
  console.log(employee);
}

console.log("----------------------------");

let numbers=[100, 200, 300, 400, 500, 10, 20, 30, 40, 50,2,4,2,5,6,34];

// write a program that can display the maximum and minimum values in the array. dont use any build-in sort function.
let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("Minimum value: " + min);
console.log("Maximum value: " + max);

console.log("----------------------------");

// write a program that can sort the numbers array in ascending order. dont use any build-in sort function.
let sortedNumbers = [...numbers];

for (let i = 0; i < sortedNumbers.length - 1; i++) {
  for (let j = 0; j < sortedNumbers.length - 1 - i; j++) {
    if (sortedNumbers[j] > sortedNumbers[j + 1]) {
      let temp = sortedNumbers[j];
      sortedNumbers[j] = sortedNumbers[j + 1];
      sortedNumbers[j + 1] = temp;
    }
  }
}

console.log("Sorted numbers: " + sortedNumbers);

console.log("----------------------------");

//write a program that can remove duplicates from the numbers array. dont use any build-in array methods. includes and push methods use in a loop 
let uniqueNumbers = [];

for (let number of numbers) {
  if (!uniqueNumbers.includes(number)) {
    uniqueNumbers.push(number);
  }
}

console.log("Unique numbers: " + uniqueNumbers);



