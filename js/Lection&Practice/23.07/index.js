const root = document.querySelector("#root");
/*
fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => createDom(data))
  .catch(err => console.log(err));

function createDom(user) {
  const h1 = document.createElement("h1");
  const email = document.createElement("p");
  const img = document.createElement("img");
  h1.textContent = `${user.results[0].name.first} ${user.results[0].name.last}`;
  email.textContent = user.results[0].email;
  img.alt = user.results[0].name.first;
  img.src = user.results[0].picture.large;
  root.append(h1, email, img);
}
*/

// 1)endpoint
// 2)resource
// 3)parametrs

//звернення до https://pixabay.com/api/
/*
const URL =
  "https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&image_type=photo&category=computer&per_page=12";

fetch(URL)
  .then(response => response.json())
  .then(data => render(data.hits))
  .catch(err => console.log(err));

function render(imgArray) {
  const res = imgArray.map(el => {
    let img = document.createElement("img");
    img.src = el.webformatURL;
    img.alt = el.tags;
    return img;
  });
  root.append(...res);
}
*/

const URL =
  "https://api.novaposhta.ua/v2.0/json?apiKey=e0ef6bf016e65f4b02da18270bdf9d45&modelName=InternetDocument&calledMethod=getDocumentList";
fetch(URL)
  .then(response => response.json())
  .then(data => console.log(data));
