/*
const templ = new Promise(function(resolve, rejected){
    let result =[];

    for (let i =0; i<1000000; i++){
        result.push(i+1)
    }
    resolve(result);

   

});
function showData(data){
    console.log(data);
}
templ.then(data=> {data.length=500;
    return data})
.then(arr=>showData(arr))
.catch(err=>console.log(err);)*/
/*
const promise = new Promise((ok, err)=>{
    const arr=[];
    for(let i=0;i<100000; i++){
        arr.push(i)
    }
    if((arr.reduce((acc,el)=>acc+el))%2===0){
        ok(arr)
    }else{
        err('fatal')
    }
})

promise.then(arr=>console.log(arr))
.catch(err=>console.log(err))
*/


function asyncLoop(iterationCount){
    return new Promise((ok,err)=>{
        let arr=[];
        for (let i=0;i<iterationCount;i++){
            arr.push(i)
        }
        if((arr.reduce((acc,el)=>acc+el))%2===0){
            ok(arr)
        }else{
            err(`fatal on ${iterationCount}`)
        }
    })
}
// asyncLoop(100)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))
// .finally(data=>console.log(data))
let arr = [asyncLoop(10), asyncLoop(20)]
console.log(arr);

Promise.race(arr)
.then(result=>console.log(result))
.catch(err=>console.log(err))


// Promise.all - обробляє  і повертаю елементи масива в тому ж порядку
// Promise.race - обробляє  і повертаю елементи масива який перший обробивсь
