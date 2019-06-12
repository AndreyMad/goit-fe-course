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




//01.06


/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

// function Account ({login, email}){
// this.login = login;
// this.email = email;

// }
// Account.prototype.getInfo = function(){
//   console.log(`${this.login} ${this.email}`);
// }


// const account = new Account({login: 'Mangozedog',email: 'mango@dog.woof'});
// const account2 = new Account({login: 'andrey', email: 'asdasdasdsa'});
// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// account2.getInfo();


/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// class StringBuilder{
//   constructor(string){
//     this._value = string;
//   }
//   get value(){
//     return this._value;
//   }
//   append(str){
//     return this._value = this._value + str;
//   }
//   prepend(str){
//     return this._value = str + this._value;
//   }
//   pad(str){
//     return this._value = str + this._value+str;
//   }

// }

// const builder = new StringBuilder('.');

// builder.append('^'); 
// console.log(builder.value); // '.^'

// builder.prepend('^'); 
// console.log(builder.value); // '^.^'

// builder.pad('='); 
// console.log(builder.value); // '=^.^='


/*
 * Напиши класс Car с указанными свойствами и методами
*/

// class Car {
//   constructor({ maxSpeed = 0, price = 0}) {
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;
//     this._value = price;
    
//     /*
//       Добавь свойства:
//         - speed - для отслеживания текущей скорости, изначально 0.
//         - maxSpeed - для хранения максимальной скорости 
//         - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//         - distance - содержит общий киллометраж, изначально с 0
//     */
//   }
  

//   turnOn() {
//     this.running = true;
    
//     // Добавь код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//   }

//   turnOff() {
//     this.running = false;
//     // Добавь код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//   }

//   accelerate(spd) {
//     if(spd< this.maxSpeed){
//     this.speed = spd;
//     }
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//   }

//   decelerate(spd) {
//     if(spd<this.maxSpeed && spd>0){
//       this.speed = spd;
//     }
    
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//   }

//   drive(hours) {
// if(this.turnOn){
//   this.distance = hours * this.speed;
// }

//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//   }
//   static getSpecs(car){
//     console.log(`${car.maxSpeed}, ${car.speed}, ${car.running} и ${car.distance}`);
//   }
//   get value(){
//     return this._value;
//   }
//   set value(newValue){
//     this._value= newValue;
//   }
// }

// const car = new Car({ maxSpeed: 200,price: 100 });

// // console.log(car);
// //  car.turnOn();
// // car.accelerate(150);
// // // console.log(car);
// // car.drive(2);
// // console.log(car);




// /*
// * Добавь к классу Car из предыдущего задания статический
// * метод getSpecs, который принимает объект-машину как параметр
// * и выводит в консоль значения полей maxSpeed, speed, running и distance.
// */
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
// console.log(car.value); // 2000

// car.value = 4000;
// console.log(car.value); // 4000




/// Задача


// let str = "How can mirrors be real if our eyes aren't real";
// String.prototype.toJadenCase = function(){
//   const array =  this.split(' ');
//   let newArr = [];
//   for(let el of array){
//     newArr.push(el.replace(el[0], el[0].toUpperCase()))
//   }
//   return newArr.join(' ');
  
// };
// console.log(str.toJadenCase());
// console.log(str);


// String.prototype.toJadenCase = function(){
//   return this.split(' ').map(el=> el.replace(el[0], el[0].toUpperCase())).join(' ');
// }

// console.log(str.toJadenCase());
// console.log(str);

// console.log(0<Infinity);
















































