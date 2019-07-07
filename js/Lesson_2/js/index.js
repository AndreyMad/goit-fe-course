//////////////// Task 1/////////////////

/*
let button =document.querySelector('.button');
function counter(){
    button.textContent ++;
}
button.addEventListener('click', counter);
*/

//////////////// Task 2/////////////////

// let value1 = document.getElementsByTagName("input")[0];
// let value2 = document.getElementsByTagName("input")[1];
// let button = document.querySelector('button');
// let result = document.querySelector('.result');
// let sumFunc = () => {
//     result.textContent = (parseInt(value1.value) + parseInt(value2.value));
// }
// button.addEventListener('click', sumFunc);


//////////////// Task 3/////////////////

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*//*
let sub = document.querySelector('.sub');
let add = document.querySelector('.add');
let result = document.querySelector('.value')
function onChange(){
  result.textContent=this.value;
}
class Counter{
   constructor(onChange){
     this.onChange = onChange;
     this.value = +result.textContent;

   }
   more(){
     this.value +=1;
     this.onChange;
   }
   less(){
     this.value-=1;
     this.onChange;
   }

};
const counter = new Counter(onChange);


sub.addEventListener('click', counter.more.bind(counter));
add.addEventListener('click', counter.less.bind(counter));
*/
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/


// let btn = document.querySelector('.btn');


// function checkData(e){
//         e.preventDefault();
//         let checkedButton = document.querySelector('input:checked');
//         document.querySelector('.result').textContent= `Result: ${checkedButton.value}`;
    
// };
// btn.addEventListener('click', checkData); 


/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/


// let gallery = document.querySelector('.images')
// function alertSrc(e){
//     if(e.target!==gallery){
//     alert(e.target.src)}
// }
// gallery.addEventListener('click', alertSrc)


/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/


// let list = document.querySelector('.list');
// function deleteItem(e){
//     if(e.target.dataset.action === 'delete'){
//      list.removeChild(e.target.parentNode)
     //   e.target.closest('li').remove();//або так
//    }
// }
// list.addEventListener('click', deleteItem)


/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// let inputList = document.querySelector('.input-list');
// function checkInput(e){
//       if(e.target.value.length == e.target.dataset.length ){
//         e.target.classList.remove('invalid')
//         e.target.classList.add('valid')
//       }else {
//         e.target.classList.remove('valid')
//         e.target.classList.add('invalid')
//       }
// }
// inputList.addEventListener('change', checkInput)


/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// let input = document.querySelector(".input");
// let inputValue = document.querySelector(".input-value");
// //let message = document.querySelector('.message');
// let inputListener = () => {
//   inputValue.textContent = `Current input value: ${input.value}`;
// };
// let inputFocus = () => {
//   if (!input.value) {
//     inputValue.textContent = `Input is in focus!`;
//   }
// };
// input.addEventListener("focus", inputFocus);
// input.addEventListener("blur", inputListener);
// input.addEventListener("input", inputListener);





/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/


// let btn = document.querySelector('.btn')
// let modal = document.querySelector('.js-modal-backdrop');
// let closeButton = document.querySelector('.close-btn')
// console.log(closeButton);

// let openModal=()=>{
//   modal.classList.remove('modal-hidden')
// }
// let closeModal =(e)=>{
//   if(e.target.classList.contains('js-modal-backdrop') ||e.target.classList.contains('close-btn')){
// modal.classList.add('modal-hidden')
// }}


// btn.addEventListener('click', openModal)
// closeButton.addEventListener('click', closeModal)
// modal.addEventListener('click', closeModal)

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
let menu = document.querySelector('.js-menu');
let childArr = menu.children;
console.log(typeof childArr);
function menuActive (e){
  for(let el of childArr){
    el.children[0].classList.remove('active')
  }
  if(e.target.classList.contains('menu-link')){
    e.target.classList.add('active')
  }
}
menu.addEventListener('click', menuActive)


if(!e.target.id){
  alert("has id");
}else{


  
////////////////////////////////////////////////////////////////////////////////////////
function editNote({target}){
  console.log(target);
    if(target.parentNode.dataset.action ==='edit-note'){
      let noteToEdit = notepad.findNoteById(target.closest('.note-list__item').dataset.id);
      inputBodyValue.value=noteToEdit.body;
      inputTitleValue.value = noteToEdit.title;
      
    }
  }
  
  