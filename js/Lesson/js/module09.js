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

let form = document.querySelector('.form');
let login = document.querySelector(`[name ='login']`);
let password = document.querySelector(`[name ='password']`);
let users = [];
function sendData(e){
    e.preventDefault();

    let loginValue = login.value;
    let passwordValue = password.value;
    if(!loginValue || !passwordValue){
        alert('Enter valid inf')
    }else{
    let result={
        login : loginValue,
        password : passwordValue,
    }
    users.push(result)
    console.log(result);
    form.reset()
    }
    console.log(users);
};
form.addEventListener('submit', sendData);


let str = '';
function showKeyboardEvent(e){
    console.log(e);
    str+=e.key
    console.log(str);
}
window.addEventListener('keypress', showKeyboardEvent);



