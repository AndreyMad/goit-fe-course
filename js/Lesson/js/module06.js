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


let resortHotel ={
    name: 'Resort hurghada',
    pricePerNight: 200,
    status: 'free',
}
let shardjHotel={
    name: 'Shardj',
    pricePerNight: 400,
    status: 'busy',
}
let fourSeason ={
    name: 'Four Season',
    pricePerNight: 100,
    status: 'free',
}

function getHotelInfo(nameTourist, lastNameTourist){
    console.log(`hello ${nameTourist}  you entered in Name: ${this.name}, price: ${this.pricePerNight}, status: ${this.status}`);
}
let name = [prompt()]

getHotelInfo.call(fourSeason, 'Homer', 'Simpson');
getHotelInfo.apply(shardjHotel, name);
































