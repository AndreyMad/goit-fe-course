import initialNotes from "../../assets/notes.json";
import { PRIORITY_TYPES } from "./constants";
import Notepad from "./notepad-model";
import {refs, renderNoteList} from "./view";
import MicroModal from "micromodal";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

const notyf = new Notyf({duration:2000});

let inputTitleValue = document.getElementsByName("note_title")[0];
let inputBodyValue = document.getElementsByName("note_body")[0];
let shortId = require("shortid");
let notepad;


if (localStorage.getItem("notes") !== null) {
  let localNotes = JSON.parse(localStorage.getItem("notes"));
  notepad = new Notepad(localNotes);
} else {
  notepad = new Notepad(initialNotes);
}
renderNoteList(refs.root, notepad.notes)

function deleteNote({ target }) {
  if (target.parentNode.dataset.action === "delete-note") {
    notepad.deleteNote(target.closest(".note-list__item").dataset.id);
    target.closest(".note-list__item").remove();
    notyf.success('Заметка успешно удалена!')
    pushToLocalStorage();
  }
}

function addListItem(listRef, note) {
  listRef.insertAdjacentHTML('beforeend', note)
  rootRefresh()
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
    addListItem(refs.root, newNote);
    pushToLocalStorage();
    closeModal();
    notyf.success('Заметка добалена!');
  } else notyf.error("Необходимо заполнить все поля!");
}

function filterNotes({ target }) {
  refs.root.innerHTML = "";
  renderNoteList(refs.root, notepad.filterNotesByQuery(target.value));
}

refs.modalForm.addEventListener("submit", submit);
refs.root.addEventListener("click", deleteNote);
refs.inputValue.addEventListener("input", filterNotes);
//renderNoteList(root, notepad.notes);

//////////////////////////////////////////
let noteToEdit = "";

function editNote({ target }) {
  if (target.parentNode.dataset.action === "edit-note") {
    noteToEdit = notepad.findNoteById(
      target.closest(".note-list__item").dataset.id
    );
    showModal()
    inputBodyValue.value = noteToEdit.body;
    inputTitleValue.value = noteToEdit.title;
    refs.modalForm.removeEventListener("submit", submit);
    refs.modalForm.addEventListener("submit", saveEdited);
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
  refs.modalForm.addEventListener("submit", submit);
  refs.modalForm.removeEventListener("submit", saveEdited);
  pushToLocalStorage();
  closeModal();
  notyf.success('Заметка успешно обновлена!!!')
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
    pushToLocalStorage()
    rootRefresh();
    
  }
  if (
    target.parentNode.dataset.action === "increase-priority" &&
    noteToEdit.priority < 2
  ) {
    noteToEdit.priority++;
    pushToLocalStorage();
    rootRefresh();
  
  }
}
function rootRefresh() {
  refs.root.innerHTML = "";
  renderNoteList(refs.root, notepad.notes);
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

refs.root.addEventListener("click", editNote);
refs.root.addEventListener("click", changePriority);
refs.modalBtn.addEventListener("click", showModal);

export { initialNotes };
