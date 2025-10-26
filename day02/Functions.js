function greetings() {
  console.log("Hallo Programmierer.");
  console.log("Willkommen zu unserem Coding-Praktikum!");
}

greetings();
greetings();

console.log("------------------------------------------------------------");

/**
 * Displays the name of a person with a default message if no name is provided.
 *
 * @param {string} [personName="Unknown"] - The name of the person to be displayed.
 *
 * @returns {void} This function does not return any value. It only logs a message to the console.
 */
function displayName(personName = "Unknown") {
  console.log(`Der Name der Person ist ${personName}.`);
}

displayName();
displayName("John Doe");

console.log("------------------------------------------------------------");

/**
 * Adds two numbers together, with an optional third number.
 *
 * @param {number} num1 - The first number to be added.
 * @param {number} num2 - The second number to be added.
 * @param {number} [num3=0] - The optional third number to be added. Default is 0.
 *
 * @returns {number} The sum of the input numbers.
 */
function addNumbers(num1, num2, num3 = 0) {
  return num1 + num2 + num3;
}

console.log(addNumbers(5, 10));
console.log(addNumbers(5, 10, 15));
