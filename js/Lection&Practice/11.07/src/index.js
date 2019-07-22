import { frameworks } from './data/list';
import listTemplate from './templates/list.hbs'
import {root} from './selector/selector'
import {convertFromJSON, convertToJSON } from './localStorage'
import galleryItems from './data/gallery'
import galleryTemplate from './templates/gallery.hbs'
import  './style.css'



const markupList = listTemplate(frameworks)
const markupGallery = galleryTemplate(galleryItems)
const finalMarkup = markupList + markupGallery;
// root.innerHTML = finalMarkup;
//root.innerHTML += markupGallery
let str = convertToJSON(galleryItems);
localStorage.setItem('gallery', str)
let result = JSON.parse(localStorage.getItem('gallery'));
console.log(result);
result.push({img: 'https://placeimg.com/300/150/any', title:'any'})
localStorage.setItem('gallery', convertToJSON(result))