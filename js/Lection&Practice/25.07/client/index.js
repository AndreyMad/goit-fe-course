const input = document.querySelector(".search__input");
const form = document.querySelector(".search");
const gallery = document.querySelector(".gallery");
const deleteBtn = document.querySelector(".delete");

function createGallery(obj) {
  const resultString = obj.hits.reduce(
    (acc, el) =>
      acc +
      `<div class="gallery__item">
      <img src=${el.webformatURL} alt= ${el.type}/>
      <div class="overlay">
        <img src="./img/favor.png"/>
      </div>
    </div>`,
    ""
  );

  gallery.innerHTML = resultString;
}

function getImg(e) {
  e.preventDefault();
  e.stopPropagation();
  const value = input.value;
  const getUrl = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${value}&per_page=12&image_type=photo`;
  form.reset();
  fetch(getUrl)
    .then(response => response.json())
    .then(data => createGallery(data))
    .catch(err => console.log(err));
}

function addToFavourite(e) {
  e.stopPropagation();
  if (e.target.nodeName === "IMG") {
    const src = e.target.parentElement.previousElementSibling.src;
    const alt = e.target.parentElement.previousElementSibling.alt;
    const obj = {
      src,
      alt
    };

    fetch("http://localhost:3000/favourite", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}

function deleteImg() {
  fetch(`http://localhost:3000/favourite/2`, {
    method: "Delete"
  });
}

function updateImg() {
  fetch("http://localhost:3000/favourite/5", {
    method: "PUT",
    body: JSON.stringify({ src: "#", alt: "image" }),
    headers: {
      "Content-Type": "application/json"
    }
  });
}

form.addEventListener("submit", getImg);
gallery.addEventListener("click", addToFavourite);
deleteBtn.addEventListener("click", updateImg);
