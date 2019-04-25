// task1
// let input;
// const numbers = [];
// let total = 0;

// while (true) {
//   input = prompt("Enter number");
//   if (input === null) {
//     break;
//   } else if (isNaN(input)) {
//     alert("Its not a number!");
//     continue;
//   } else {
//     numbers.push(Number(input));
//   }
// }
// for (let element of numbers) {
//   total += element;
// }
// console.log(total);

//task2

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3;
while (attemptsLeft > 0) {
  let userPassword = prompt("Enter your password:");
  attemptsLeft -= 1;
  if (userPassword === null) {
    alert("Canceled");
    break;
  }else if (passwords.includes(userPassword)) {
    alert("Добро пожаловать!");
    break;
  } else if (attemptsLeft === 0) {
    alert("У вас закончились попытки, аккаунт заблокирован!");
    break;
  } else {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  }
}
