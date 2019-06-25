"use strict";

// let btn = document.querySelector(".register");
// btn.style.backgroundColor = "red";

// let item = document.querySelectorAll(".item");
// //console.log(item);
// // let itemArr = [...document.querySelectorAll('.item')];
// // console.log(itemArr);
// // item.forEach(element => (element.style.color = "green"));

// // let item3 = document.querySelector("#item3");
// // console.log(item3.parentNode);
// item3.parentNode.height = "500px";
// // console.log(item3.children);
// // item3.children.fontSize = "45px";
// // item3.previousElementSibling.color = "red";
// // console.log(item3.children.fontSize);


// let image = document.querySelector('.img');
// let checkBox = document.querySelector('.checkbox');

// let checkValue = document.querySelector('[type=checkbox]:checked');
// console.log(checkValue.checked);
// let checkboxArr = [...document.querySelectorAll('[type=checkbox]:checked')]
// .map(el=>el.value);
// console.log(checkboxArr);

// let mainText = document.querySelector('.mainText');
// mainText.textContent = checkboxArr[1];

// console.log(image.style);


//20,06
/*
let link = document.createElement('a');
link.textContent = 'Google';
link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');
/*
console.log(link);
//console.log(link.getAttribute('href'));
//link.removeAttribute('target');
let arr = [...link.attributes];
console.log(arr);
link.classList.add('item_main', 'item');
link.classList.remove('item_main');
console.log(link);
link.classList.toggle('item_main');
*/
/*
let list = document.querySelector('.list');
let item = document.querySelector('#item1')
item.append(link);
list.before(link);
list.after(link);

let clonedLink = link.cloneNode(false);
clonedLink.textContent = 'Google2';
console.log(clonedLink);
list.before(clonedLink)
*/

//====================================== create site
// Select elements
/*
let root = document.querySelector('#root');

// creating elements
let header = document.createElement('header');
let heroContainer = document.createElement('div');
let mainTitle= document.createElement('h1')
let pictureContainer = document.createElement('div');
let mainPicture = document.createElement('div');
let mainTitleContainer = document.createElement('div');
let mainName = document.createElement('h1')
let mainH3 = document.createElement('h3')





//classes
heroContainer.classList.add('hero--container');
pictureContainer.classList.add('picture--container')
mainPicture.classList.add('picture')
mainTitleContainer.classList.add('title--container')

// attributes





// content
mainTitle.textContent= "there's that line from newton about standing on the shoulders of giants. we're all standing on dennis' shoulders";
mainH3.innerHTML="founder of <span>c language</span> and <span>uNIX"
mainName.textContent="dennis ritchie"




// add to screen
root.append(header);
header.append(heroContainer)
heroContainer.append(mainTitle);
heroContainer.append(pictureContainer);
pictureContainer.append(mainPicture)
header.append(mainTitleContainer);
mainTitleContainer.append(mainName);
mainTitleContainer.append(mainH3);



function createHtml(tag, className, atrObject, 
    contentType, content, container, method){
    let el = document.createElement(tag);
    if(className){ 
    el.classList.add(className);}
    if(typeof atrObject === 'object') {
    for(const key in atrObject){
         el.setAttribute(key, atrObject[key])
     }}
     //el.setAttribute(attributeName, attributeValue);
    
    
    if(contentType){
        el.textContent=(content)
    }else {
        el.innerHTML = content;
    }
     container[method](el)
   
     return el
 
}
let divCreateWithFunction = createHtml("div", 'name', {id: '#name'}, false,
 '<span>lorem ispum</span>', mainTitleContainer, 'prepend');
 let title12= createHtml('h3', 0, {id:'tittt'}, true, 'Title', divCreateWithFunction,'prepend')
*/


