// function checkYear(year, month){
//     if(typeof year !== 'number'){
//         return "wrong type";
//     }

//     if(year % 4 === 0){
//         return true, month;
//     }
//     return false;
// }
// console.log(checkYear(2015, "march"));
// console.log(checkYear(2010));
// console.log(checkYear(2016, 'july'));
// console.log(checkYear(2014));
// console.log(checkYear(2001));



let years = [];
for(let year = prompt("Enter year"); year < 2019; year +=1){
    if(typeof(year) !== 'number'){
        console.log("Not a number");
        break;
    }
    if(year % 4 ===0){
        years.push(year);
    }

}
console.log(years);

// function newFunction() {
//     return typeof ;
// }
