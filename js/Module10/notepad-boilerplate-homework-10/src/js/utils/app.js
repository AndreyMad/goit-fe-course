import initialNotes from '../../assets/notes.json'
export { createNoteContent, createActionButton, createListItem, renderNoteList, root} from './constants'
import Notepad from './notepad-model'



let notepad = [];
if((localStorage.getItem('notes') === null)){

  notepad = new Notepad(initialNotes);
 
}else{
  let localNotes = JSON.parse(localStorage.getItem('notes'))
  notepad = new Notepad(localNotes)
}
renderNoteList(root, notepad.notes);
