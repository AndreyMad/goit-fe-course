//event obj\
// let btn = document.querySelector('#btn')
// function showEvent(evt){
//     console.dir(evt.target.textContent);
// }
// btn.addEventListener('click', showEvent);
// let btn = document.querySelector('.burger');
// let menu = document.querySelector('.list');
// function showMenu(){
//     menu.classList.toggle('show__menu')
// }


// btn.addEventListener('click', showMenu)

// let form = document.querySelector('.form');
// let login = document.querySelector(`[name ='login']`);
// let password = document.querySelector(`[name ='password']`);
// let users = [];
// function sendData(e){
//     e.preventDefault();

//     let loginValue = login.value;
//     let passwordValue = password.value;
//     if(!loginValue || !passwordValue){
//         alert('Enter valid inf')
//     }else{
//     let result={
//         login : loginValue,
//         password : passwordValue,
//     }
//     users.push(result)
//     console.log(result);
//     form.reset()
//     }
//     console.log(users);
// };
// form.addEventListener('submit', sendData);


// let str = '';
// function showKeyboardEvent(e){
//     console.log(e);
//     str+=e.key
//     console.log(str);
// }
// window.addEventListener('keypress', showKeyboardEvent);



//module09 27.06
/*
let body = document.querySelector('body');
let overlay = document.createElement('div');
let modal = document.createElement('div');
let close = document.createElement('span');
close.classList.add('close');
close.textContent =`X`;
overlay.classList.add('overlay');
modal.classList.add('modal');
modal.append(close)
overlay.append(modal);

function openModal(){
    body.append(overlay)
}
window.addEventListener('DOMContentLoaded', openModal);
function closeModal(){
    overlay.classList.add('hide');

}
close.addEventListener('click', closeModal)
*/


let child = document.querySelector('.child');
let sub = document.querySelector('.sub');
child.addEventListener('click', alertChild)
function alertChild(){
   
    alert('alertchild');
}
sub.addEventListener('click', alertSub);
function alertSub(evt){
    evt.stopPropogation()
    alert('ALERTSUB');
}

// let gallery = document.querySelector('.gallery');
// let gallery_item = document.querySelectorAll('.gallery_item')
// function scale(e){
  
//    if(e.target.classList.contains( 'gallery_item')){
//     e.target.classList.toggle('gallery_item--scale')
//   }
// }
// gallery.addEventListener('click', scale)