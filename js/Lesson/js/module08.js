"use strict";

let btn = document.querySelector(".register");
btn.style.backgroundColor = "red";

let item = document.querySelectorAll(".item");
//console.log(item);
// let itemArr = [...document.querySelectorAll('.item')];
// console.log(itemArr);
// item.forEach(element => (element.style.color = "green"));

// let item3 = document.querySelector("#item3");
// console.log(item3.parentNode);
item3.parentNode.height = "500px";
// console.log(item3.children);
// item3.children.fontSize = "45px";
// item3.previousElementSibling.color = "red";
// console.log(item3.children.fontSize);


let image = document.querySelector('.img');
let checkBox = document.querySelector('.checkbox');

let checkValue = document.querySelector('[type=checkbox]:checked');
console.log(checkValue.checked);
let checkboxArr = [...document.querySelectorAll('[type=checkbox]:checked')]
.map(el=>el.value);
console.log(checkboxArr);

let mainText = document.querySelector('.mainText');
mainText.textContent = checkboxArr[1];

console.log(image.style);


