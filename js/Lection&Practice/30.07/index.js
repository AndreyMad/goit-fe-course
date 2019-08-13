// let arr = ["react", "vue", "node"];
// let iterator = arr[Symbol.iterator]();
// let next = iterator.next();
// while (!next.done) {
//   console.log(next.value);
//   next = iterator.next();
// }

// let range = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator]() {
//     let current = this.from;
//     let last = this.to;
//     return {
//       next() {
//         if (current <= last) {
//           return {
//             done: false,
//             value: current++
//           };
//         } else {
//           return {
//             done: true,
//             value: undefined
//           };
//         }
//       }
//     };
//   }
// };
// for (let num of range) {
//   console.log(num);
// }
/*
const myFavouriteAuthors = {
  allAuthors: {
    fiction: ["Agatha Christie", "Dr. Seuss"],
    scienceFiction: [
      "Neal Stephenson",
      "Arthur Clarke",
      "Isaac Asimov",
      "Robert Heinlein"
    ],
    fantasy: ["J. R. R. Tolkien", "J. K. Rowling", "Terry Pratchett"]
  },
  [Symbol.iterator]() {
    let genres = Object.values(this.allAuthors);
    let currentAuthorIndex = 0;
    let currentGenreIndex = 0;
    return {
      next() {
        const authors = genres[currentGenreIndex];
        const doNotHaveMoreAuthors = !(currentAuthorIndex < authors.length);
        if (doNotHaveMoreAuthors) {
          currentGenreIndex++;
          currentAuthorIndex = 0;
        }
        const doNotHaveMoreGenders = !(currentGenreIndex < genres.length);
        if (doNotHaveMoreGenders) {
          return {
            value: undefined,
            done: true
          };
        }
        return {
          value: genres[currentGenreIndex][currentAuthorIndex++],
          done: false
        };
      }
    };
  }
};
for (let el of myFavouriteAuthors) {
  console.log(el);
}
*/

//////////////generators
/*
//normal funct
function normal() {
  console.log("I");
  console.log("can");
  console.log("be");
  console.log("stopped");
}

// normal();

function* generatorFunc() {
  console.log("This will be executed first");
  yield "hello";
  console.log("I will be printed after pause");
  yield "world";
}
const generatorObj = generatorFunc();
console.log(generatorObj.next().value);
console.log(generatorObj.next().value);
console.log(generatorObj.next());

async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}
getPost();
*/

function loop(count) {
  let arr = [];
  let i = 0;
  while (i < count) {
    arr.push(i);
    i++;
  }

  return arr;
}

async function calculate() {
  let result = await loop(10000);
  console.log(result);
}
calculate();
console.log("start");
