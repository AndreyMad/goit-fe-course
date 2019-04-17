                                // Task 1 if else

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
let userPassword = prompt("Enter password");
if(userPassword.toLowerCase() === ADMIN_PASSWORD){
    message = "Добро пожаловать";
} else if(userPassword === null){
    message = "Отменено пользователем!";
} else{
    message = "Доступ запрещен, неверный пароль!";
}
console.log(message);

                                //task 1 ternar

// const ADMIN_PASSWORD = 'm4ng0h4ckz';
// let message;
// let userPassword = prompt("Enter password");

// message = userPassword.toLowerCase() === ADMIN_PASSWORD ? "Добро пожаловать" : userPassword === null ? "Отменено пользователем!" : "Доступ запрещен, неверный пароль!";
// console.log(message);

        


                                //task 2

let credits = 23580,
    pricePerDroid = 3000,
    numberDroids = prompt("How many droids you want to buy?"),
    totalPrice = numberDroids * 3000;
if (totalPrice >= credits) {
    console.log("Недостаточно средств на счету!");
}else if (numberDroids === null) {
    console.log("Отменено пользователем!");
}else {
  credits -= totalPrice;
  console.log(
    `Вы купили ${numberDroids} дроидов, на счету осталось ${credits} кредитов.`);
}


                                //task 3
let country = prompt("Укажите страну доставки:");
let price;
if(country != null){
    switch(country){
        case "китай":
            price = 100;
            break;
        case "южная америка":
            price = 250;
            break;
        case "австралия":
            price = 170;
            break;
        case "индия":
            price = 80;
            break;
        case "ямайка":
            price = 120;
            break;
        default:
            price = "В вашу страну доставка не осуществляется!"
        break;
    }
}
else{
    price = "Отменено пользователем";}

console.log(`Доставка в ${country} будет стоить ${price} кредитов`);







// console.log(country);















// const userNumber = prompt('Enter your number:');
// let title = null;
// if (Number(userNumber) === 1){
//     title = 'Error';
// } else if(Number(userNumber) === 2){
//     title = 'Hello user';
// } else if(Number(userNumber) === 3){
//     title = 'Great';

// } else{
//     console.log('Enter right NUMBER!!!!!');
// }
// console.log("TCL: title", title)
