// // 'use strict'
// // // let user = {
// // //     name: 'Bart',
// // //     lastName: 'Simpson',
// // //     getFullInfo(){
// // //         console.log(this);
// // //         // console.log(`${this.name} ${this.lastName}` );
// // //     },
// // //     showArrowThisInObj:()=>{
// // //         console.log(this);
// // //     },
// // //     nestedArrowFunction(){
// // //         console.log(`regular function`, this);
// // //         const arrowFunct= ()=> {
// // //             console.log(`this is the arrowFunct`, this);
// // //         }
// // //         arrowFunct();
// // //     }
// // // }
// // // user.nestedArrowFunction()
// // // user.getFullInfo();
// // // user.showArrowThisInObj();


// // // function showThis (){
// // // //     console.log(this);
// // // // }  window or undefined

// // // const showThis = ()=> {
// // //     console.log(this);
    
// // // }
// // // showThis()


// // //метод bind


// // // let resortHotel ={
// // //     name: 'Resort hurghada',
// // //     pricePerNight: 200,
// // //     status: 'free',
// // // }
// // // let shardjHotel={
// // //     name: 'Shardj',
// // //     pricePerNight: 400,
// // //     status: 'busy',
// // // }
// // // let fourSeason ={
// // //     name: 'Four Season',
// // //     pricePerNight: 100,
// // //     status: 'free',
// // // }

// // // function getHotelInfo(nameTourist, lastNameTourist){
// // //     console.log(`hello ${nameTourist}  you entered in Name: ${this.name}, price: ${this.pricePerNight}, status: ${this.status}`);
// // // }
// // // let name = [prompt()]

// // // getHotelInfo.call(fourSeason, 'Homer', 'Simpson');
// // // getHotelInfo.apply(shardjHotel, name);


// // // 23.05.2019
// // //функції конструктори

// // // function Message (author, text, date){
// // //     this.author = author;
// // //     this.text = text;
// // //     this.date = date;

// // //     this.editMessage = function(editText){
// // //         this.text = editText;
// // //     }
// // // }

// // // let newMessage = new Message('i am', 'asdasdadasd', "11.05");
// // // let newMessage2 = new Message('Homer', 'asdadasdasasderrrr', "12.05");
// // // newMessage.editMessage('Privet')
// // // console.log(newMessage);
// // // console.log(newMessage2);

// // //створення обекта і написання шоблона обєкта

// // function Tank({armor, speed, amunition, x,y}){
// //     this.life = 100;
// //     this.armor = armor;
// //     this.speed = speed;
// //     this.amunition = amunition;
// //     this.isEngineBroken = false;
// //     this.x = x;
// //     this.y = y;
// //     this.move = function(newX, newY){
// //         if (this.canTankMove()) {
// //             this.x = newX;
// //             this.y = newY;
// //         } else{alert("I cant move")}
// //     };
// //     this.fire = function() {
// //         if(this.canFire()) {
// //             this.amunition -= 1;
// //         } else {
// //             prompt('Enter your credit card number');
// //         }

// //     };
// //     this.canTankMove = function() {
// //         return !this.isEngineBroken;
// //     };
// //     this.canFire = function() {
// //         return this.amunition > 0;
// //     };
// //     this.hit = function(damage){
// //         this.life -= damage;
// //     }

// // }

// // let T34 =new Tank({amunition: 100, armor: 12, speed: 40, x: 10, y:15});
// // T34.fire();
// // T34.move(40,20);
// // console.log("t34",T34);

// // let tiger = new Tank (100, 40,80, 40,60)

// // console.log(tiger);





// // 28.05

// // ООП

// // let arr = [2, 4, 5,8,15];
// // console.log(arr);

// // let animal = {
// //     canSleep: true,
// //     canEat: true,
// // }

// // let dog = {
// //     canPlay: true,
// //     canBark: true,
// // }

// // let dog = Object.create(animal)
// // dog.canBark = true;
// // dog.canplay = true;


// // console.log(dog);
// // console.log(animal);

// // function Phone({size,ram, status, diagonal,color}){
// //     this.size = size;
// //     this.diagonal = diagonal;
// //     this.color = color;
// //     this.ram = ram;
// //     this.status = status;
 
    

// // }
// // let Nokia_3310 = new Phone({
// //     size: '100*150', 
// //     status: true, 
// //     color: 'blue', 
// //     ram: '32mb', 
// //     diagonal: '12 inch'});
// // let Siemens_600 = new Phone ({
// //     size: '50*80', 
// //     ram: '15mb', 
// //     diagonal: '2 inch', 
// //     color: 'black', 
// //     status: false,
   
// // });

// // // console.log(Nokia_3310);
// // // console.log(Siemens_600);

// // Phone.prototype.call = function(){
// //     alert(`'Telephone calling'`);
// // }
// // Phone.prototype.showInfo = function(){
// //     console.log(`${this.size} ${this.color} ${this.diagonal}`);
// // };
// // Phone.prototype.toggleStatus = function(){
// //     this.status =!this.status;
// // };

// // // Nokia_3310.showInfo();
// // // Siemens_600.toggleStatus();
// // // console.log(Siemens_600);

// // //30.05

// // function SmartPhone({size,ram, status, diagonal,color,
// //     camera, wifi, sensorsScreen}){
// // // this.size = size,
// // // this.ram = ram,
// // // this.status = status,
// // // this. diagonal = diagonal,
// // // this.color = color,
// // // this.camera = camera,
// // // Phone.call(this,{ size,diagonal, ram, status,color, camera}),

// // Phone.apply(this, [{size,diagonal, ram, status,color, camera}]),
// // this.wifi = wifi,
// // this.sensorsScreen = sensorsScreen
// // }

// // SmartPhone.prototype= Object.create(Phone.prototype); //наслідування методів Phone

// // SmartPhone.prototype.takePhoto = function(){
// //     console.log('Photo is done');
// // }
// // SmartPhone.prototype.takeVideo= function(){
// //     console.log('Video is done');
// // }
// // SmartPhone.prototype.toggleWifi=function(){
// //     this.wifi = !this.wifi;
// // }
// // SmartPhone.prototype.toggleScreen = function(){
// //     this.sensorsScreen = !this.sensorsScreen;
// // }

// // let lg = new SmartPhone({
// //     size: "200*200",
// //     diagonal: 10,
// //     ram: "15mb",
// //     status: true,
// //     color: "red",
// //     camera: '15 mpx',


// //     wifi: true,
// //     sensorsScreen: true,
// // })
// // console.log(lg);



// // es6.0

// class Phone{
//  constructor({size,ram, status, diagonal,color}){
//      this.size = size;
//      this.diagonal = diagonal;
//      this.color = color;
//      this.ram = ram;
//      this.status = status;
// }

// static calcCircle(radius){
//     console.log(2*Math.PI *Math.pow(radius,2));
// }


// toggleStatus(){
//     this.status =!this.status;
//  };
//  call(){
//      console.log('Phone calling');
//  };
//  showInfo(){
//     console.log(`${this.size} ${this.color} ${this.diagonal} ${this.status}`);
//  }

// };
// // let iphone = new Phone({size : "50*20", ram: "2gb",status: true, diagonal: 2, color: "white" })
// // iphone.showInfo();
// // console.log(iphone);

// class SmartPhone extends Phone{
//     constructor({
//         size, ram, status, diagonal, color,
//         camera, wifi, sensorsScreen,title}){
//             super({size, ram, status,diagonal,camera,color}),
//             this.wifi = wifi,
//             this.sensorsScreen = sensorsScreen,
//             this._title = title
//         }
//         get title(){
//             return this._title;
//         }
//         // set title(value){
//         //     this._title = value;
//         // }
// }

// let lg = new SmartPhone({
//     size: "200*200",
//     diagonal: 10,
//     ram: "15mb",
//     status: true,
//     color: "red",
//     camera: '15 mpx',
//     wifi: true,
//     sensorsScreen: true,
//     title:'best phone'  
// })
//     // console.log(lg.status);
//     // lg.toggleStatus();
//     // console.log(lg.status);

// // статичні методи
// // Phone.calcCircle(13)

// // гетери і сетери 

// console.log(lg.title);
// lg.title = "worst phone";
// console.log(lg.title);






























