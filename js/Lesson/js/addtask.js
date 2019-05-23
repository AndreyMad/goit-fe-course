// 18.05
// const user = {
//     id: '31215',
//     name: 'Homer',
//     email: 'Homer@gmail.com',
// };
// const {name} = user;





// const user = {
//     id: '31215',
//     userName: 'Homer',
//     email: 'Homer@gmail.com',
// };
// const {userName: name, age = 21} = user;

// console.log(`Welcome to the game ${name} age ${age}`);
// console.log(user);

// const rgb = [90, 170, 150];
// const [red, green, blue] = rgb;
// console.log(`red ${red}/ green ${green}/ blue ${blue}`);

// const checkSum = (value, data, ...args) => {}


// const user = {
//     id: '31215',
//     userName: 'Homer',
//     email: 'Homer@gmail.com',
// };
// // const newUser = {...user, email: 'asdasd'}; //новий синтаксис переобпределенія значень ключів масиву
// const newUser = Object.assign({}, user, {userName: 'Marge'});//старий синтаксис переобпределенія значень ключів масиву
// console.log(user);
// console.log(newUser);


// const users = [{
//     id: 12,
//     name: 'Andrey',
//     email: "andreyemail",
// },
// {
//     id: 13,
//     name: 'Oksana',
//     email: 'oksanagmail',
// }];
// const newUser = [...users];
// newUser[0] = {...newUser[0], name: 'Alex'};



// console.log(users);
// console.log(newUser);




/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
//     - выводит содержимое объекта user в формате ключ:значение 
//       используя Object.keys и for...of
    
//     - выводит содержимое объекта user в формате ключ:значение 
//       используя Object.entries и for...of
// */

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
  
// user.mood = '';
// user.hobby = 'javascript';
// user.premium = false;

// let arr = Object.keys(user);
// for(let key of arr){
// console.log(`${key}  ${user[key]}`);
// };


// const userEntries = Object.entries(user);
// for(const entries of userEntries){
//     let key2 = entries[0];
//     let key3 = entries[1];
//     console.log(`${key2} - ${key3}`);
// }



/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 4
//   };
//   const keys = Object.keys(tasksCompleted);
// //   const values = Object.values(tasksCompleted);
// let value = tasksCompleted[keys[0]];
// let name = keys[0];
// for(let el of keys){
//     if(value < tasksCompleted[el]){
//         value = tasksCompleted[el];
//         name = el
//     }
// }
// console.log(`${name} ${value}`);



// /*  
//   Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
//   Функция возвращает количество свойств.
// */

// // Вызовы функции для проверки
// const countProps = (obj)=>{
//     return Object.values(obj).length;
    
// }
// console.log(
//     countProps({})
//   ); // 0
  
//   console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
//   ); // 3


/*  
//   Напиши функцию isObjectEmpty(obj), которая получает 
//   один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
//   Возвращает true если объект пустой, false если не пустой.
// */

// // Вызовы функции для проверки
// function isObjectEmpty(obj){
//     return !Object.values(obj).length;

// }
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false


/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
// */

// // Вызовы функции для проверки
// // let salary = Object.values(salaries);
// function countTotalSalary(salaries){
//     const values = Object.values(salaries);
//     let summ = 0;
//     for(let el of values){
//         summ += el;
//     }
//     return summ;
// }

// console.log(
//     countTotalSalary({})
//   ); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330
  
  
// /*  
//   Напиши функцию getAllPropValues(arr, prop), 
//   которая получает массив объектов и имя ключа. 
//   Возвращает массив значений определенного поля prop
//   из каждого объекта в массиве
// */
// function getAllPropValues(arr, prop){
//     let newArr = [];
//     for(const el of arr){
//        if(el.hasOwnProperty(prop)){
//            newArr.push(el[prop])
//        };
//     }
//        return newArr;
// }
// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
  
//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']
  
//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']
  
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []


/*
* Есть два массива names и prices с именами и ценами товаров.
* Напишите функцию combine(names, prices), которая получает 
* эти два массива и возвращает массив объектов со свойствами name и price. 
*/

// const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];
// const combine = (name, price) => {
//     const newArr = [];
   
//     // class var
//     let i = 0;
//     for (let el of names) {
//       const obj = {};
//       obj.name = el;
//       obj.price = prices[i];
   
//       newArr.push(obj);
//       i += 1;
//     }
   
   
//     return newArr;
//    }
// const products = combine(names, prices);
// console.log(products); // массив объектов со свойствами name и price


  /*  
  Напиши функцию isObjectEmpty(obj), которая получает 
//   один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
//   Возвращает true если объект пустой, false если не пустой.
// */
// const isObjectEmpty = function (obj){
//   return Object.values(obj).length;
// }
// // Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
 // false




















