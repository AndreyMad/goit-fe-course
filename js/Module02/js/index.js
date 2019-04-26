// task1
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Enter number");
  if (input === null) {
    break;
  } else if (Number.isNaN(Number(input))) {
    alert("Its not a number!");
    continue;
  } else {
    numbers.push(Number(input));
  }
}
if(numbers.length){
for (let element of numbers) {
  total += element;
}} else{
    alert("Нou have not entered any numbers");
}

console.log(total);

//task2

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3;
while (attemptsLeft) {
  let userPassword = prompt("Enter your password:");
  attemptsLeft -= 1;
  if (userPassword === null) {
    alert("Canceled");
    break;
  }if (passwords.includes(userPassword)) {
    alert("Добро пожаловать!");
    break;
  }if (attemptsLeft === 0) {
    alert("У вас закончились попытки, аккаунт заблокирован!");
    break;
  } alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);

}
