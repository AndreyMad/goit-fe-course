
let root = document.querySelector('#root');
/*
const data = {
    name: "User",
    position: "FE Developer",
    language: "Javascript"
}
let template = document.querySelector('#simpleTemplate').innerHTML.trim();
let templateScript = Handlebars.compile(template);
let markup = templateScript(data)
console.log(markup);
let root = document.querySelector('#root');
root.innerHTML = markup;
*/
/*
const data = {
    frameworks: ["React", "Vue", "Angular"],
    libs: ['momen', 'lodash', 'axios', 'propTypes']
}
let liTemplate = document.querySelector('#liTemplate').innerHTML.trim();
let liTemplateScript = Handlebars.compile(liTemplate);
let markupLi = liTemplateScript(data)
root.innerHTML = markupLi


const frameworks =  ["React", "Vue", "Angular"]

let arrayTemplate = document.querySelector('#arrayTemplate').innerHTML.trim();
let arrayTemplateScript = Handlebars.compile(arrayTemplate);
let markup = arrayTemplateScript(frameworks)
console.log(markup);
root.innerHTML = markup;
*/
/*
const data = {
    domestic : false,
    domestic_address: "Ukraine, Kyiv",
    international_address: "USA, New-York",
    user: {
        name: "James"
    },
    title: "Your order arrived"
}
let ifTemplate = document.querySelector('#ifTemplate').innerHTML.trim();
let ifTemplateMarkup = Handlebars.compile(ifTemplate);
let markup = ifTemplateMarkup(data);
root.innerHTML = markup
*/



const galleryItems = [
    { img: 'https://placeimg.com/300/150/animals', text: 'animals' },
    { img: 'https://placeimg.com/300/150/arch', text: 'architecture' },
    { img: 'https://placeimg.com/300/150/nature', text: 'nature' },
    { img: 'https://placeimg.com/300/150/people', text: 'people' },
    { img: 'https://placeimg.com/300/150/tech', text: 'tech' },
    { img: 'https://placeimg.com/300/150/any', text: 'random' }
];


let gallery =document.querySelector('#gallery').innerHTML.trim();
let galleryMarkup = Handlebars.compile(gallery);
let markup = galleryMarkup(galleryItems);
root.innerHTML = markup
























