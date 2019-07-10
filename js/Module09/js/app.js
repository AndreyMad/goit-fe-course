"use strict";

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
};

const ICON_TYPES = {
  EDIT: "edit",
  DELETE: "delete",
  ARROW_DOWN: "expand_more",
  ARROW_UP: "expand_less"
};

const NOTE_ACTIONS = {
  DELETE: "delete-note",
  EDIT: "edit-note",
  INCREASE_PRIORITY: "increase-priority",
  DECREASE_PRIORITY: "decrease-priority"
};
class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2
  };
  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    for (let element of notepad.notes) {
      if (id === element.id) {
        return element;
      }
    }
  }

  saveNote(note) {
    notepad.notes.push(note);
    return note;
  }

  deleteNote(id) {
    let indexToDelete = this.notes.indexOf(this.findNoteById(id));
    this.notes.splice(indexToDelete, 1);
  }

  updateNoteContent(id, updatedContent) {
    let result = Object.assign(this.findNoteById(id), updatedContent);
    return result;
  }

  updateNotePriority(id, priority) {
    let result = (this.findNoteById(id).priority = priority);
    return result;
  }

  filterNotesByQuery(query) {
    let newNote = [];
    for (let element of this.notes) {
      if (
        element.title.toLowerCase().includes(query.toLowerCase()) ||
        element.body.toLowerCase().includes(query.toLowerCase())
      ) {
        newNote.push(element);
      }
    }
    return newNote;
  }

  filterNotesByPriority(priority) {
    let newArr = [];
    for (let element of this.notes) {
      if (priority === element.priority) {
        newArr.push(element);
      }
    }
    return newArr;
  }
}

const initialNotes = [
  {
    id: "id-1",
    title: "JavaScript essentials",
    body:
      "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
    priority: PRIORITY_TYPES.HIGH
  },
  {
    id: "id-2",
    title: "Refresh HTML and CSS",
    body:
      "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
    priority: PRIORITY_TYPES.NORMAL
  },
  {
    id: "id-3",
    title: "Get comfy with Frontend frameworks",
    body:
      "First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",
    priority: PRIORITY_TYPES.NORMAL
  },
  {
    id: "id-4",
    title: "Winter clothes",
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW
  }
];

////////////////////////////////////////////////////////////////////

const notepad = new Notepad(initialNotes);

function createNoteContent({ title, body }) {
  let noteContent = document.createElement("div");
  noteContent.classList.add("note__content");

  let noteTitle = document.createElement("h2");
  noteTitle.classList.add("note__title");

  let noteBody = document.createElement("p");
  noteBody.classList.add("note__content");

  noteBody.textContent = body;
  noteTitle.textContent = title;

  noteContent.append(noteTitle);
  noteContent.append(noteBody);

  return noteContent;
}

function createNoteFooter(priority) {
  let noteFooter = document.createElement("footer");
  noteFooter.classList.add("note__footer");

  let noteSection = document.createElement("section");
  noteSection.classList.add("note__section");

  let noteSpan = document.createElement("span");
  noteSpan.classList.add("note__priority");
  noteSpan.textContent = `Priority: ${priority}`;

  const noteSection2 = document.createElement("section");
  noteSection2.classList.add("note__section");

  noteSection.append(
    createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN),
    createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP),
    noteSpan
  );

  noteSection2.append(
    createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT),
    createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE)
  );

  noteFooter.append(noteSection, noteSection2);
  return noteFooter;
}

function createActionButton(action, type) {
  let button = document.createElement("button");
  button.classList.add("action");
  button.dataset.action = action;

  let buttonIcon = document.createElement("i");
  buttonIcon.classList.add("material-icons");
  buttonIcon.classList.add("action__icon");
  buttonIcon.textContent = type;

  button.append(buttonIcon);

  return button;
}

function createListItem({ id, title, body, priority }) {
  let listItem = document.createElement("div");
  listItem.classList.add("note-list__item");
  listItem.dataset.id = id;

  let note = document.createElement("div");
  note.classList.add("note");

  note.append(
    createNoteContent({
      title,
      body
    }),
    createNoteFooter(priority)
  );
  listItem.append(note);
  return listItem;
}

function renderNoteList(listRef, note) {
  const listItems = note.map(item => createListItem(item));

  listRef.append(...listItems);
}

let root = document.querySelector(".note-list");

renderNoteList(root, notepad.notes);

const generateUniqueId = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

let submitBtn = document.querySelector(".button--wide");
let inputTitleValue = document.getElementsByName("note_title")[0];
let inputBodyValue = document.getElementsByName("note_body")[0];


function submit(e) {
  e.preventDefault();
  
  if(inputTitleValue.value && inputBodyValue.value){   
    let newNote = notepad.saveNote({
      id :generateUniqueId(),
      title:inputTitleValue.value,
      body:inputBodyValue.value,
      priority: PRIORITY_TYPES.LOW
    });
    inputTitleValue.value = '';
    inputBodyValue.value = '';
    addListItem(root, newNote)}
else alert("Необходимо заполнить все поля!")
}

function addListItem(listRef, note){
  listRef.append(createListItem(note))
}
submitBtn.addEventListener("click", submit);

function deleteNote({target}){ 
  if(target.parentNode.dataset.action ==='delete-note'){
    notepad.deleteNote(target.closest('.note-list__item').dataset.id);
    target.closest('.note-list__item').remove();
  }
}
root.addEventListener('click', deleteNote)



let inputValue = document.querySelector('.search-form__input')
function filterNotes({target}){
  root.innerHTML='';
  renderNoteList(root, notepad.filterNotesByQuery(target.value))
}
inputValue.addEventListener('input', filterNotes);






////////////////////////////////////////////////////////////////////////////////////////
// Делал для себя//

root.addEventListener('click', editNote)
root.addEventListener('click', changePriority)
let noteToEdit = '';

function editNote({target}){
  if(target.parentNode.dataset.action ==='edit-note'){
    noteToEdit = notepad.findNoteById(target.closest('.note-list__item').dataset.id);
    inputBodyValue.value=noteToEdit.body;
    inputTitleValue.value = noteToEdit.title;
    submitBtn.removeEventListener('click', submit);
    submitBtn.addEventListener('click', saveEdited);
    
  }
}

function saveEdited(e){
  e.preventDefault();
  notepad.updateNoteContent(noteToEdit.id, {title: inputTitleValue.value, body:inputBodyValue.value})
  rootRefresh()
  inputTitleValue.value = '';
  inputBodyValue.value = '';
  submitBtn.addEventListener('click', submit)
  submitBtn.removeEventListener('click', saveEdited )

}

function changePriority({target}){
  noteToEdit = notepad.findNoteById(target.closest('.note-list__item').dataset.id);
  if(target.parentNode.dataset.action==='decrease-priority'&&noteToEdit.priority>0){
    noteToEdit.priority --;
    rootRefresh()
  }if(target.parentNode.dataset.action==='increase-priority'&&noteToEdit.priority<2){
    noteToEdit.priority ++;
    rootRefresh()
  }

}
function rootRefresh(){
  root.innerHTML='';
  renderNoteList(root, notepad.notes);
}