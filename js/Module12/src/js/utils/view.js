import template from '../../template/template.hbs'
let refs={
  modalForm : document.querySelector(".modal__container"),
  inputValue : document.querySelector(".search-form__input"),
  root : document.querySelector(".note-list"),
  modalBtn : document.querySelector(".page-header__button")
}
function renderNoteList(listRef, note) {

  const listItems = note.map(item => template(item)).join('');

  listRef.insertAdjacentHTML('beforeend', listItems);
}

export {refs, renderNoteList}