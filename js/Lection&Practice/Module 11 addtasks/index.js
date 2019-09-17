/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/
/*
const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "https://restcountries.eu/rest/v2/name/";

form.addEventListener("submit", fetchCountryData);


function fetchCountryData(evt) {
    evt.preventDefault();
    
    fetch(`${API_URL}${input.value}`)
    .then(response=>response.json())
   .then(data=>renderResult(data))
    .catch(err=>console.log(err))
}
function renderResult(country){
    result.innerHTML='';
    let h1 = document.createElement('h1')
    let capital = document.createElement('span');
    let currency = document.createElement('span');
    let flag = document.createElement('img');
    flag.classList.add('flag')
    h1.textContent =  `Country: ${country[0].nativeName}`;
    capital.textContent = `Capital: ${country[0].capital}`;
    currency.textContent = `Currency: ${country[0].currencies[0].name}`
    flag.src = country[0].flag;
    result.append(h1, capital, currency, flag)
    input.value='';
}
*/

/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/
/*
const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "";

form.addEventListener("submit", fetchUserData);


function fetchUserData(evt) {
    evt.preventDefault();
    fetch(`https://api.github.com/users/${input.value}`)
    .then(response=>response.json())
    .then(data=>render(data))
    .catch(err=>console.log(err))
}
function render(user){
    result.innerHTML=''
    let ava = document.createElement('img');
    let userName = document.createElement('h1');
    let about = document.createElement('span');
    let publicRepos = document.createElement('span');
    ava.classList.add('avatar');
    ava.src = user.avatar_url;
    userName.textContent = `Username: ${user.name} `;
    if(user.bio){
    about.textContent = `Bio: ${user.bio}`;
    }
    publicRepos.textContent= `Public repos: ${user.public_repos}`
    result.append(ava, userName, about, publicRepos)
    input.value='';
}
*/

/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/
/*
const form = document.querySelector(".search-form");
const userTable = document.querySelector(".user-table");

form.addEventListener("submit", fetchUsers);


function fetchUsers(evt) {
  event.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then(response => response.json())
    .then(data => renderData(data))
    .catch(err => console.log(err));
}
function renderData(data) {
  data.map(user => {
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let email = document.createElement("td");
    let city = document.createElement("td");
    let webSite = document.createElement("td");
    let company = document.createElement("td");
    name.textContent = user.name;
    email.textContent = user.email;
    city.textContent = user.address.city;
    webSite.textContent = user.website;
    company.textContent = user.company.name;
    row.append(name, email, city, webSite, company);
    userTable.append(row);
  });
}
*/

/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");

form.addEventListener("submit", getUserById);

function getUserById(evt) {
  event.preventDefault();
  let id = Number(input.value);
  console.log(id);
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(user => console.log(user))
    .catch(err => console.log(err));
}
