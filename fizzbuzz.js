let nombre = 30;

if (nombre % 3 === 0 && nombre % 5 != 0) {
  console.log("fizz");
} else if (nombre % 5 === 0 && nombre % 3 != 0) {
  console.log("buzz");
}

if (nombre % 3 === 0 && nombre % 5 === 0) {
  console.log("fizzbuzz");
} else if (nombre % 5 != 0 && nombre % 3 != 0) {
  console.log(nombre);
}
