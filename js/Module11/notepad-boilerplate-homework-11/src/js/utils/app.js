import initialNotes from "../../assets/notes.json";
import { PRIORITY_TYPES } from "./constants";
import Notepad from "./notepad-model";
import { createListItem, renderNoteList } from "./view";
import MicroModal from "micromodal";

let root = document.querySelector(".note-list");
let inputTitleValue = document.getElementsByName("note_title")[0];
let inputBodyValue = document.getElementsByName("note_body")[0];
let shortId = require("shortid");
let modalBtn = document.querySelector(".page-header__button");
let notepad;
let modalForm = document.querySelector(".modal__container");
let inputValue = document.querySelector(".search-form__input");

if (localStorage.getItem("notes") !== null) {
  let localNotes = JSON.parse(localStorage.getItem("notes"));
  notepad = new Notepad(localNotes);
} else {
  notepad = new Notepad(initialNotes);
}

function deleteNote({ target }) {
  if (target.parentNode.dataset.action === "delete-note") {
    notepad.deleteNote(target.closest(".note-list__item").dataset.id);
    target.closest(".note-list__item").remove();
    pushToLocalStorage();
  }
}

function addListItem(listRef, note) {
  listRef.append(createListItem(note));
}

function submit(e) {
  e.preventDefault();
  if (inputTitleValue.value && inputBodyValue.value) {
    let newNote = notepad.saveNote({
      id: shortId(),
      title: inputTitleValue.value,
      body: inputBodyValue.value,
      priority: PRIORITY_TYPES.LOW
    });
    inputTitleValue.value = "";
    inputBodyValue.value = "";
    addListItem(root, newNote);
    pushToLocalStorage();
  } else alert("Необходимо заполнить все поля!");
}

function filterNotes({ target }) {
  root.innerHTML = "";
  renderNoteList(root, notepad.filterNotesByQuery(target.value));
}

modalForm.addEventListener("submit", submit);
root.addEventListener("click", deleteNote);
inputValue.addEventListener("input", filterNotes);
//renderNoteList(root, notepad.notes);

//////////////////////////////////////////
let noteToEdit = "";

function editNote({ target }) {
  if (target.parentNode.dataset.action === "edit-note") {
    noteToEdit = notepad.findNoteById(
      target.closest(".note-list__item").dataset.id
    );
    inputBodyValue.value = noteToEdit.body;
    inputTitleValue.value = noteToEdit.title;
    modal.removeEventListener("click", submit);
    modal.addEventListener("click", saveEdited);
  }
}

function saveEdited(e) {
  e.preventDefault();
  notepad.updateNoteContent(noteToEdit.id, {
    title: inputTitleValue.value,
    body: inputBodyValue.value
  });
  rootRefresh();
  inputTitleValue.value = "";
  inputBodyValue.value = "";
  modal.addEventListener("click", submit);
  modal.removeEventListener("click", saveEdited);
  pushToLocalStorage();
}

function changePriority({ target }) {
  noteToEdit = notepad.findNoteById(
    target.closest(".note-list__item").dataset.id
  );
  if (
    target.parentNode.dataset.action === "decrease-priority" &&
    noteToEdit.priority > 0
  ) {
    noteToEdit.priority--;
    rootRefresh();
  }
  if (
    target.parentNode.dataset.action === "increase-priority" &&
    noteToEdit.priority < 2
  ) {
    noteToEdit.priority++;
    rootRefresh();
    pushToLocalStorage();
  }
}
function rootRefresh() {
  root.innerHTML = "";
  renderNoteList(root, notepad.notes);
}

let pushToLocalStorage = () => {
  let noteToLocal = JSON.stringify(notepad.notes);

  localStorage.setItem("notes", noteToLocal);
};
let showModal = () => {
  MicroModal.show("note-editor-modal");
};
let closeModal = () => {
  MicroModal.close("note-editor-modal");
};

root.addEventListener("click", editNote);
root.addEventListener("click", changePriority);
modalBtn.addEventListener("click", showModal);

export { initialNotes };
