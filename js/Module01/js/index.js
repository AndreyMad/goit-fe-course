//                                 // Task 1 if else

const ADMIN_PASSWORD = "m4ng0h4ckz";
let message;
let userPassword = prompt("Enter password");
if (userPassword === null) {
  message = "Отменено пользователем!";
} else if (userPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
console.log(message);



//task 2

let credits = 23580,
  pricePerDroid = 3000,
  numberDroids = prompt("How many droids you want to buy?");
let totalPrice = numberDroids * 3000;
if (numberDroids === null) {
  console.log("Отменено пользователем!");
}else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log(
    `Вы купили ${numberDroids} дроидов, на счету осталось ${credits -= totalPrice} кредитов.`
  );
}

//task 3
const costChina = 100;
const costSouthAmerica = 250;
const costAustralia = 170;
const costIndia = 80;
const costJamaica = 120;

let userCountry = prompt("Enter delivery country");

if (userCountry === null) {
  alert("Отменено пользователем!");
} else {
  switch (userCountry.toLowerCase()) {
    case "китай":
      alert(`Доставка в ${userCountry} будет стоить ${costChina} кредитов`);
      break;
    case "южная америка":
      alert(`Доставка в ${userCountry} будет стоить ${costSouthAmerica} кредитов`);
      break;
    case "австралия":
      alert(`Доставка в ${userCountry} будет стоить ${costAustralia} кредитов`);
      break;
    case "индия":
      alert(`Доставка в ${userCountry} будет стоить ${costIndia} кредитов`);
      break;
    case "ямайка":
      alert(`Доставка в ${userCountry} будет стоить ${costJamaica} кредитов`);
      break;
    default:
      alert("В вашей стране доставка не доступна");
  }
}