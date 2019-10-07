import * as api from '../../services/api'
export default class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2
  };
  get notes() {
    return api.getNotes().then(notesFromServer=>{
       this._notes.push(...notesFromServer);

      return this._notes;
    })
  }

  findNoteById(id) {
    for (let element of this._notes) {
      if (id === element.id) {
        return element;
      }
    }
  }
saveNote(note){
  return api.saveNote(note)
    .then(newNote => {
      this._notes.push(newNote);
      return newNote;
    })
}
 

deleteNote(id) {
  api.deleteNote(id)
    .then(() => {
      const index = this._notes.indexOf(this.findNoteById(id));
      this._notes.splice(index, 1);

    })
}

  updateNoteContent(id, updatedContent) {
    return api.updateNoteContent(id, updatedContent)
      .then(updatedNote => {
        
        if (this.findNoteById(id)) {
          return Object.assign(this.findNoteById(id), updatedNote);
        }
      })
  }





  updateNotePriority(id, priority) {
    return new Promise(resolve=>{
      setTimeout(() => {
        let result = (this.findNoteById(id).priority += priority);
  
        resolve(result);
      }, 0);
    })
   
  }

  
  filterNotesByQuery(query) {
    return new Promise(resolve=>{
      setTimeout(() => {
        let newNote = [];
        for (let element of this._notes) {
          if (
            element.title.toLowerCase().includes(query.toLowerCase()) ||
            element.body.toLowerCase().includes(query.toLowerCase())
          ) {
            newNote.push(element);
          }
        }
        resolve(newNote);
      }, 100);
    })
   
  }

  filterNotesByPriority(priority) {
    return new Promise(resolve=>{
      setTimeout(() => {
        let newArr = [];
    for (let element of this.notes) {
      if (priority === element.priority) {
        newArr.push(element);
      }
    }
    resolve(newArr);
      }, 300);
    })
    
  }}
