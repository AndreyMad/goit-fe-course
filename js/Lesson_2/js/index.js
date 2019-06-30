//////////////// Task 1/////////////////

/*
let button =document.querySelector('.button');
function counter(){
    button.textContent ++;
}
button.addEventListener('click', counter);
*/

//////////////// Task 2/////////////////
/*
let value1 = document.getElementsByTagName("input")[0];
let value2 = document.getElementsByTagName("input")[1];
let button = document.querySelector('button');
let result = document.querySelector('.result');
let sumFunc = () => {
    result.textContent = (parseInt(value1.value) + parseInt(value2.value));
}
button.addEventListener('click', sumFunc);
*/

//////////////// Task 3/////////////////

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/



// class Counter(){
//     value = document.querySelector('.value').textContent;
//     onChange(newValue){
//         value = newValue;
//     }


// };
// let counter = new Counter;

// let sub = document.querySelector('.sub');
// let add = document.querySelector('.add');

// sub.addEventListener('click', counter.decrement);
// add.addEventListener('click', counter.increment);



/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
/*

let btn = document.querySelector('.btn');


function checkData(e){
        e.preventDefault();
        let checkedButton = document.querySelector('input:checked');
        document.querySelector('.result').textContent= `Result: ${checkedButton.value}`;
    
};
btn.addEventListener('click', checkData); 
*/

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

/*
let gallery = document.querySelector('.images')
function alertSrc(e){
    if(e.target!==gallery){
    alert(e.target.src)}
}
gallery.addEventListener('click', alertSrc)
*/


/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/


let list = document.querySelector('.list');
function deleteItem(e){
    if(e.target.dataset.action === 'delete'){
     list.removeChild(e.target.parentNode)
   }
}
list.addEventListener('click', deleteItem)
