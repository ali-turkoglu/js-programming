for (let i = 0; i < 5; i++) {
  console.log(i + 1 + ". Hello Leute");
}

console.log("-----------------------");

for (let i = 1; i <= 10; i++) {
  if (i == 3) {
    continue;
  } else if (i == 7) {
    break;
  }
  console.log(i);
}
