// let cart = [150, 800, 200, 500, 700, 1000];

// console.log(cart);

// let copyCart = cart.slice().reverse();

// console.log(copyCart);
// let b;
// console.log(copyCart.includes(2));

// let allCart = [].concat(copyCart, cart);
// console.log(allCart);

// let counter = 0;
// let arr = [];
// while(counter < 3){
//     let someNumber = prompt("введіть змінну");
//     arr.push(+someNumber);
//     counter++;
// }
// console.log(arr);

// for (let counter = 0; counter < 4; counter++) {
//     let someNumber = prompt("Дай цифру");
//     arr.push(+someNumber);
// }
// console.log(arr);

// let sum = 0;
// for (let i = 0; i < arr.length; i +=1){
//     sum = sum + arr[i];
// }
// console.log(sum);
// const arr = [1,2,3,4,5,6,7,8,9];

// for(let i = 0; i <arr.length; i++){
//     if(arr[i] % !== 0){
//         continue;
//     }
//     newArr.push(arr[i] * 2);
// }
// console.log(newArr);

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// // Удалить первый элемент массива
// // users.shift();
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить последний элемент массива
// // users.pop();
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива пользователя "Lux"
// users.unshift("Lux")
// console.log(users); // ["Lux", "Poly", "Ajax"]

// // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// users.push("Jay", "Kiwi")
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// // Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = "Ajax";
// const indexFind = users.indexOf(userToDelete);
// users.splice(indexFind, 1)
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// // Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = "Jay";
// users.splice = (users.indexOf(userToInsertBefore), 0, "Kong");
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

// for(const user of users){
//     const arrIndex = users.indexOf(user);
//     console.log(`${arrIndex + 1} - ${user}`);
// }

// const message = "Proin adadasd sociis natoque et magnis parturient montes mus";
// let price = 0;
// let words = message.split(" ");

// // Разбить строку в массив, разделитель - пробел, и записать в переменную words
// console.log(words);

// // Выведи в консоли длину массива words
// console.log(words.length); // 8

// // Вычисли сколько будет стоить гравировка и запиши результат в переменную price
// price = words.length * 80;
// console.log(price); // 80

// task4

// let number = +prompt("Введите число больше 100");
// while(number < 100){
//     if( number === null){
//         console.log("Как хочешь");
//         break;
//     }
//     number = prompt("Введите правильное число");
//     continue;
// }
// console.log(number);

// while(true){
//     let input = prompt("Введите число больше 100");
//     let inputToNumber = +input;
//     if(input === null){
//         console.log("Отмена");
//         break;
//     } else if (inputToNumber > 100){
//         console.log("Great job!!!");
//         break;
//     }
// }

// task 5

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = +prompt("enter number")
// const matched = [];

// for(const element of numbers){
//     if(element > num){
//         matched.push(element)
//     }
// }

// console.log(matched.length);
// console.log(matched); // [17, 14, 14, 32, 18, 26]

// task 6

// const message = "May the force be with you";
// let longestWord;
// const arr = message.split(" ");
// longestWord = arr[0];
// for(const word of arr){
//     if(word.length > longestWord.length)
//     longestWord = word;

// }

// console.log(longestWord); // 'force'

//task 7

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
// const min = numbers[0];
// const max = numbers[numbers.length - 1];
// let value = prompt(`"Введите цифру между ${min} и ${max}"`);
// let message;

// numbers.includes(+value) ? message = "Поздравляем, Вы угадали!" : message = "Сожалеем, Вы не угадали!";
// alert(message);

// 23.04.2019

// let arrOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];
// // for (let i = 0; i < arrOfNumbers.length; i++){
// //     console.log(arrOfNumbers[i]);
// // }
// for(let element = 0, max = arrOfNumbers.length; element < max; element +=1){
//     // if(arrOfNumbers[element] %2 !== 0){
//     //     continue;
//     // }
//     console.log(arrOfNumbers[element] %4, arrOfNumbers[element] );
// }

// let sum = 0;
// for(i = 1; i <= 50; i++){
//     sum = sum + i;
//     console.log(sum);
// }
// console.log(sum);

// 14.05
// замикання функцій
// function first  (){
//     let discont = 0;
//     function second(){
//         discont +=1;
//         console.log(discont);
//      }

//     return second;

// }
// let user1 = first();
// user1();
// user1();

// let user2 = first();
// user2();
// user2();
// user2();
// user2();
// user2();

// let marka = "bmw";
// let model = "x5";
// let color = "white";
// let engineVolume = "4";
// let vin = "wba12156465454";
// let isLux = false;
// let maxSpeed = 210;

// const BMW = {
//     mark : "BMW",
//     model : "x5",
//     color : "white",
//     engineVolume : "4",
//     vin : "wba12156465454",
//     isLux : false,
//     maxSpeed : 210,
//     price : 6000,
//     interier: {
//         numberOfSeats: 5,
//         material: "leather",
//         isHaveChildSeats: true,
//     },
//     palitra:['black', 'orange', 'blue'],
//     year : 2015,
// }
// // console.log(`Марка: ${BMW.mark},
// // Колір: ${BMW.color},
// // Ціна: ${BMW.price}$,
// // Колір: ${BMW.palitra},
// // Матеріал: ${BMW.interier.material}`);
// let key = 'price';
// console.log(BMW[key]);

// function createObject (value1, value2){
//     return {
//         name: value1,
//         lastName: value2,
//     }
// }
// let name1 = createObject(prompt("Введіть імя:"), prompt("Введіть прізвище:"));
// let name2 = createObject('Marge', 'Simpson');
// console.log(name1,
//     name2);

// 16.05

// let cofee = {
//   name: "americano",
//   price: 25,
//   size: "big"
// };
// cofee.currency = "UA"; //cofee['curency'] = 'UA';
// delete cofee.name; //delete cofee['size'];
// //console.log(cofe.name);
// cofee.hasMilk = "false";
// if (cofee.hasMilk) {
//   console.log("Hello");
// } else {
//   console.log("error");
// };

// let sell = 26.8;
// let buy = 26.6;
// let usd = {
//   sell,
//   buy
// };
// // console.log(usd);

// //функція генерації ключів
// function createObj() {
//     const alph = 'asasd;khoujteogjeogij';
//     let key ='';
//         for(let i =0; i<3; i++){  
//        let index =  Math.floor(Math.random()*alph.length);   // ???????     
//         let letter = alph[index];
//         key += letter;
       
//     }
// return key;
// }
// let obj={
//     name: 'user',
//     // [createObj()]: 25,
//     value: createObj(),
// }
// console.log(obj);


// //for in


// let user = {
//     name: 'Andrii',
//     type: 'basic',
//     age: 30,
//     email: 'asdads@asdads.asd',
//     password: 'asdasd',

// }
// for(let key in user ){
//     console.log(`${key} - ${user[key]}`);
// }

// // магазин
// let storagePrice = {
//     apple: 5,
//     melon: 4,
//     banana: 8,
//     orange: 14,
// }
// let userOrder1 ={
//     apple: 1,
//     banana: 2,
//     orange: 2,
// }
// let userOrder2 ={
//     melon: 3,
//     banana: 1,
//     orange: 44,
// }
// function calculatorOrderPrice(userOrder, storage){
//     let summ = 0;
//     for (let key in userOrder){
//         let total = userOrder[key] * storage[key];
//         summ += total;
        
//     }
//     return summ;
// }
// console.log(calculatorOrderPrice(userOrder1, storagePrice));
// console.log(calculatorOrderPrice(userOrder2, storagePrice));

// перевірка на пусстий обект
// let user = {
//     name: 'Homer',
//     lastName: 'Simpson',
//     age: 41,

// }
// // let keysArr = Object.keys(user);
// // console.log(keysArr);

// // let valuesArr = Object.values(user);
// // console.log(valuesArr);

// // let untriesArr = Object.entries(user);
// // console.log(untriesArr);

// function objIsEmpty(obj){
// //     if(Object.keys(obj).length){
// // return true;
// //     }else{return false}
// return Object.keys(obj).length === 0;
// }

// console.log(objIsEmpty(''));

//

// let tank ={
//     life: 100,
//     armor: 100,
//     speed: 30,
//     amunition: 10,
//     isEngineBroke: false,
//     x: 50,
//     y: 50,
//     move: function(newX, newY){
//         if(tank.canTankMove()){
//         tank.x = tank.x + newX;
//         tank.y = newY;
//     }else{alert('Engine broke');
// }
//     },
//     shoot(){
//         if(tank.canFire()){
//         tank.amunition -=1 ;
//         }else{alert("cant fire")}
//     },
//     canTankMove(){
//         return !tank.isEngineBroke;
//     },
//     canFire(){
//         return tank.amunition>0;
//     }
// };
// tank.move(2,4);
// // tank.shoot()
// // console.log(tank);

// let tank ={
//     life: 100,
//     armor: 100,
//     speed: 30,
//     amunition: 10,
//     isEngineBroke: false,
//     x: 50,
//     y: 50,
//     move: function(newX, newY){
//         if(tank.canTankMove()){
//         this.x = this.x + newX;
//         this.y = newY;
//     }else{alert('Engine broke');
// }
//     },
//     shoot(){
//         if(this.canFire()){
//         this.amunition -=1 ;
//         }else{alert("cant fire")}
//     },
//     canTankMove(){
//         return !this.isEngineBroke;
//     },
//     canFire(){
//         return this.amunition>0;
//     }
// };
// tank.move(2,4);
// tank.shoot()
// console.log(tank);












































