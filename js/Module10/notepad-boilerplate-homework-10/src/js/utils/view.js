// export default class View{
//     constructor(){
//         this._body = document.querySelector('body');
//     }
// }
import { ICON_TYPES, NOTE_ACTIONS } from '../utils/constants';
let root = document.querySelector(".note-list");
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
  };

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

  export { createNoteContent, createActionButton, createListItem, renderNoteList, root};
