'use strict'
// let user = {
//     name: 'Bart',
//     lastName: 'Simpson',
//     getFullInfo(){
//         console.log(this);
//         // console.log(`${this.name} ${this.lastName}` );
//     },
//     showArrowThisInObj:()=>{
//         console.log(this);
//     },
//     nestedArrowFunction(){
//         console.log(`regular function`, this);
//         const arrowFunct= ()=> {
//             console.log(`this is the arrowFunct`, this);
//         }
//         arrowFunct();
//     }
// }
// user.nestedArrowFunction()
// user.getFullInfo();
// user.showArrowThisInObj();


// function showThis (){
// //     console.log(this);
// // }  window or undefined

// const showThis = ()=> {
//     console.log(this);
    
// }
// showThis()


//метод bind


// let resortHotel ={
//     name: 'Resort hurghada',
//     pricePerNight: 200,
//     status: 'free',
// }
// let shardjHotel={
//     name: 'Shardj',
//     pricePerNight: 400,
//     status: 'busy',
// }
// let fourSeason ={
//     name: 'Four Season',
//     pricePerNight: 100,
//     status: 'free',
// }

// function getHotelInfo(nameTourist, lastNameTourist){
//     console.log(`hello ${nameTourist}  you entered in Name: ${this.name}, price: ${this.pricePerNight}, status: ${this.status}`);
// }
// let name = [prompt()]

// getHotelInfo.call(fourSeason, 'Homer', 'Simpson');
// getHotelInfo.apply(shardjHotel, name);


// 23.05.2019
//функції конструктори

// function Message (author, text, date){
//     this.author = author;
//     this.text = text;
//     this.date = date;

//     this.editMessage = function(editText){
//         this.text = editText;
//     }
// }

// let newMessage = new Message('i am', 'asdasdadasd', "11.05");
// let newMessage2 = new Message('Homer', 'asdadasdasasderrrr', "12.05");
// newMessage.editMessage('Privet')
// console.log(newMessage);
// console.log(newMessage2);

//створення обекта і написання шоблона обєкта

function Tank({armor, speed, amunition, x,y}){
    this.life = 100;
    this.armor = armor;
    this.speed = speed;
    this.amunition = amunition;
    this.isEngineBroken = false;
    this.x = x;
    this.y = y;
    this.move = function(newX, newY){
        if (this.canTankMove()) {
            this.x = newX;
            this.y = newY;
        } else{alert("I cant move")}
    };
    this.fire = function() {
        if(this.canFire()) {
            this.amunition -= 1;
        } else {
            prompt('Enter your credit card number');
        }

    };
    this.canTankMove = function() {
        return !this.isEngineBroken;
    };
    this.canFire = function() {
        return this.amunition > 0;
    };
    this.hit = function(damage){
        this.life -= damage;
    }

}

let T34 =new Tank({amunition: 100, armor: 12, speed: 40, x: 10, y:15});
T34.fire();
T34.move(40,20);
console.log("t34",T34);

let tiger = new Tank (100, 40,80, 40,60)

console.log(tiger);


























































