/*
function sayHello(){
    console.log("hello");
}

setTimeout(sayHello, 2000)
console.log('test');


const btn  = document.querySelector('button');
const id = setTimeout(sayHello, 5000);
function stopTimeout(){
    clearTimeout(id)
}

console.log(id);
btn.addEventListener('click', stopTimeout);
*/

/*
const btn  = document.querySelector('button');
function greet(){
    console.log("Hello");
}
const  id= setInterval(greet, 10000);
function stopInterval(){
    clearInterval(id)
}
btn.addEventListener('click', stopInterval)
*/
/*
function timeToCreate(){
    let date1 = new Date()
    let time1 = date1.getTime();
    let timOfCreate = new Date(time1)
    console.log(timOfCreate.toTimeString());
}


const btn  = document.querySelector('button');
btn.addEventListener('click', timeToCreate)

*/
/////////////////timer//////////////////////

const dateToVacate = new Date(2019, 7,31,0,0,0 )


function timerToVacation(){
const today = new Date();
const delta = dateToVacate - today;
const sec = Math.floor(delta/1000)%60;
const min = Math.floor(delta/1000/60)%60;
const hours = Math.floor(delta/1000/60/60)%24;
const days = Math.floor(delta/1000/60/60/24);
let secText = document.querySelector('.seconds');
let minText = document.querySelector('.minutes');
let hoursText = document.querySelector('.hours');
let daysText = document.querySelector('.days')
secText.textContent = sec<10 ?`0${sec}`:sec;
minText.textContent = min<10?`0${min}`:min;
hoursText.textContent = hours<10?`0${hours}`:hours;
daysText.textContent = days<10?`0${days}`:days;
}

setInterval(timerToVacation, 1000)

















































