console.log("Test gestartet.");

try {
  console.log(result);
} catch (e) {
  console.log(`Es liegt ein Fehler vor: ${e}`);
}finally{
    console.log("Finally Block");
}

console.log("Test beendet.");


console.log("-----------------------------------------");

// absichtlich einen Fehler verursachen
throw new Error("Es liegt ein Fehler vor") 
