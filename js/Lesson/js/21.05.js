// let names = ['Homer', 'Marge', 'Bender'];
// let lastName = ['Simpson', 'Norris', 'Rodrigues'];
// for(let i in names){
// let result = [...lastName[i], ...names[i]];
// console.log(result);
// };

// let frontEnd = ['3s', 'React', 'HTML', 'CSS'];
// // let fullStack = [...frontEnd, 'Nodejs'];
// // console.log(fullStack);

// let desc = {
//     title: 'warior',
//     year: 1800,
//     time: 120,
// };
// let trailer ={
//     id: 2,
//     url: 'youtube/trailer/warior&1800.avi',
// };
// let similarMovies = {
//     count: 3,
//     id: 6,
//     filmArray: [
//         {
//         title: 'movie1',
//         year: 1900,
//         time: 100,
//     },{
//         title: 'movie2',
//         year: 1950,
//         time: 100,
//     },{
//         title: 'movie3',
//         year: 1980,
//         time: 100,
  
//     },
//     ]
// }

// let filmInfo = {
//     ...desc, 
//     ...trailer,
//     ...similarMovies,
   
// }
// console.log(filmInfo);

/////// оператор REST

// function sum (...arrgs) {
//    let total = 0;
//    for(let el of arrgs){
//        total += el;
//    }
//     return total; 
// };

// console.log(sum(1,5,15,30));

/////// деструктуризація обєктів і масивів

// let user = {
//     name: 'Homer',
//     budget: {
//         total: 4000,
//         dayLimit: 500, 
//     },
//     memberShip: {
//         status: 'Vip',
//         email: 'homer@email',
//     }
// };
// // const name = user.name;
// // const total = user.budget.total;
// const {name, budget, memberShip:{email}} = user;



// console.log(name);
// console.log(email);

//// ... масивів
        //let result = ['Hello', 48, {title: 'chapter1', pageNumber: 1} ];
// let title = result[0];
// let totalPage = result[1];
// let firstChapter = result[2];
        //const [title, totalPage, firstChapter] = result;


        //console.log(firstChapter);

//передача по ссилці і по значенню

// let a =5;
// let b =a;
// console.log(a,b);
// a=10;
// // console.log(a,b);

// let user = {
//     name: 'bobi',

// };
// let user2 = {...user, lastName:'Simpson'};
// console.log('user1', user);
// console.log('user2', user2);
// user.name = 'homer';
// user2.name = 'marge';
// console.log('user2', user2);
// console.log('user1', user);


