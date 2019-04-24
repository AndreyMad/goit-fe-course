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
