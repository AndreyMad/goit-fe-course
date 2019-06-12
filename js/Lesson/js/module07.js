/*==================================04.06================================*/

/*
let arr = [1,2,3,4,5,6,7,8];
//брудна функція змінює початкові данні
function create (){
    for(let el of arr){
       el = el*2;
    }      
    return arr;
}
 // чиста функція працює з копією
function create2(arr){
    let newArr = [];
    for(let el of arr){
        newArr.push(el*2);
    }
    return newArr;
}
console.log(create(arr));
console.log(create2(arr));
*/
//let a = [1,2,3,4,6,7,9,10,15,28,33];
/*
//array.method(function(element, index, arr){})

function double(arr){
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        newArr.push(i*2);
    }
    return newArr;
}
console.log(double(a));
 
//те саме за допомогою map
// let result = a.map(function(el){
//     return el*2;
    
// })
//===== те саме за допомогою стрілочної функції
//let result = a.map(el=>{return el*2;})
let result = a.map(el => el * 2);
console.log(result);
console.log(a);
*/

// метод масива filter
/*
let a = [1, 2, 3, 4, 6, 7, 9, 10, 15, 28, 33];
let result = a.filter(function(el){
    if(el> 0){
        return el;
    }
})
let result = a.filter(el => el < 5 ? el: null);
let result = a.filter(el => el < 6);

console.log(result);
*/

// метод масива find

// let a = [1, 2, 3, 4, 6, 7, 9, 10, 15, 28, 33];

// let result = a.find(el=>el===40);

// console.log(result);

// метод масива every
// перевіряє чи проходить ВЕСЬ масив перевірку
/*
let a = [1, 2, 3, 4, 6, 7, 9, 10, 15, 28, 33];

let result = a.every(el=>el<34);
console.log(result);
*/

// метод масива some
// перевіряє чи проходить хоч один елемент масиву перевірку
/*
let a = [1, 2, 3, 4, 6, 7, 9, 10, 15, 28, 33];

let result = a.some(element=>element>33);
console.log(result);
*/

// метод масива reduce
//
/*
let a = [1, 2, 3, 4, 6, 7, 9, 10, 15, 28, 33];

let summ = 0;
for (let i of a) {
  summ += i;
}
console.log(summ);

let result = a.reduce(function(acc, el) {
  return acc + el;
}, 0);

let resultS = a.reduce((acc, el) => acc + el, 0);

console.log(result);
console.log(resultS);
*/
/*
let cart = [
    {
        price: 10,
        name: 'Meat'
    },
    {
        price: 25,
        name: 'milk'
    },
    {
        price: 40,
        name: 'wheat'
    }
];
let result = cart.reduce((acc, el) => acc + el.price, 0);

console.log(result);
*/

//метод sort !!!!!!!ЗМІНЮЄ ОРИГІНАЛ!!!!!!!!!!!!
/*
let a = [1, 33, 3, 4, 645, 7, 12, 10, 4, 8, 2];
console.log(a);
a.sort(function(a, b) {
  return b - a;
});
a.sort((a,b)=> a-b);

console.log(a);
*/

// let a = [1, 33, 3, 4, 645, 7, 12, 10, 4, 8, 2];
// for(let el of a){

// }

//====================================================11.06===================================================

const scientist = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id:1
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id:2
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id:3

  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id:4
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id:5
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id:6
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id:7
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id:8
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id:9
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id:10
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id:11
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id:12
  }
];

// let sumYears = scientist.map(el=>el.dead-el.born)
// .reduce((acc, el)=>acc+el,0);

// let sumYears = scientist.reduce((acc, el)=>acc+(el.dead-el.born),0)
//console.log(sumYears);

// сортування по імені
//  let alphArr = [...scientist];
//  alphArr= alphArr.sort((a,b)=>a.name>b.name? 1:-1)
//  .map(el=>el.name)

// console.log(alphArr);
// console.log(scientist);

// 4) Відсортувати вчених по даті народження
// let sortLife=scientist.sort((a,b)=>a.born-b.born)
//.map(el => `name: ${el.name}, Surname: ${el.surname}, born: ${el.born}`);
// console.log(sortLife);

// 5) Відсортувати вчених по кількості прожитих років
// let sortLife=scientist.sort((a,b)=>(a.dead-a.born)-(b.dead-b.born))
//  console.log(sortLife);

// let newarr = sortLife.map(el => `name: ${el.name}, Surname: ${el.surname}, born: ${el.born}`);
// console.log(newarr);

// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті

// let delByYear = scientist.filter(el => el.born > 1700 || el.born < 1400);
// let delById = scientist.filter(el=>el.id!==6);
// console.log(delByYear);
// console.log(delById);


// 7) Знайти вченого який народився найпізніше.

// let findLastBorn = scientist.sort((a,b)=>a.born-b.born)[scientist.length -1];
// console.log(findLastBorn);
// scientist[11].born=1000;
// console.log(findLastBorn);
// console.log(scientist);


// 8) Знайти рік народження Albert Einstein

// let findEinstein = scientist.find(el=>el.name==='Albert' && el.surname ==='Einstein').born;
// console.log(findEinstein);



// 9) Знайти вчених прізвище яких починається на літеру С

// let findSurname = scientist.filter(el=>el.surname[0]==='C');
// console.log(findSurname);


// 10) Видалити з масива всіх вчених імя яких починається на A

// let delByA = scientist.filter(el=>el.name[0]!=='A');
// console.log(delByA);

//==============================з   ДЗ
let skills = [ 'velit','adipisicing', 'amet', 'anim', 'commodo','amet', 
'culpa', 'elit', 'ex','culpa', 'ipsum', 'irure','irure','irure','irure','irur2e', 'laborum', 'lorem', 
'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ];
console.log(skills);
let result = skills.filter((el, index, arr)=> index ===arr.indexOf(el)).sort();
console.log(result);
