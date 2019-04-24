let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Enter number");
  if (input === null) {
    break;
  } else if (isNaN(input)) {
    alert("Its not a number!");
    continue;
  } else {
    numbers.push(Number(input));
  }
}
for (let element of numbers) {
  total += element;
}
console.log(total);
