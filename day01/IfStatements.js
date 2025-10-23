let score = 50;

if (score >= 60) {
  console.log("Dein Ergebnis ist " + score + ". Du hast die Prüfung bestanden");
} else {
  console.log(
    "Dein Ergebnis ist " + score + ". Du hast die Prüfung nicht bestanden"
  );
}

console.log("------------------------------------");

let number = 1000;

if (number > 0) {
  console.log("Positive Zahl");
} else if (number < 0) {
  console.log("Negativ Zahl");
} else {
  console.log("Null");
}

console.log("--------------------------------");

score = 600;

if (score >= 0 && score <= 100) {
  if (score >= 60) {
    console.log(
      "Dein Ergebnis ist " + score + ". Du hast die Prüfung bestanden"
    );
  } else {
    console.log(
      "Dein Ergebnis ist " + score + ". Du hast die Prüfung nicht bestanden"
    );
  }
}else{
    console.log("ungültige Ergebnis");
}
