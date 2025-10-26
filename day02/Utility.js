function square(x) {
  return x * x;
}

function cube(y) {
  return y * y * y;
}

function calculate(num1, num2, operator) {
  if (operator === "-") {
    return num1 - num2;
  } else if (operator === "+") {
    return num1 + num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    console.log("Invalid operator");
    return 0;
  }
}

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function countDistinctSubstrings(str) {
  const n = str.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    const set = new Set();
    for (let j = i; j < n; j++) {
      if (!set.has(str[j])) {
        set.add(str[j]);
        count++;
      }
    }
  }
  return count;
}

module.exports = { square, cube, calculate, reverseString, countDistinctSubstrings };
