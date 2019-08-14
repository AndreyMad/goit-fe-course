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
    return this._notes;
  }

  findNoteById(id) {
    for (let element of this.notes) {
      if (id === element.id) {
        return element;
      }
    }
  }
saveNote(note){
  return new Promise((resolve)=>{
    setTimeout(() => {
      this._notes.push(note);
      this.pushToLocalStorage();
      resolve(note);
    }, 200);

  })
}
 

  deleteNote(id) {
    return new Promise(resolve=>{
  setTimeout(() => {
  let indexToDelete = this.notes.indexOf(this.findNoteById(id));
  resolve(this.notes.splice(indexToDelete, 1));
  this.pushToLocalStorage();
    }, 300);
    })
 
  }

  updateNoteContent(id, updatedContent) {
    return new Promise(resolve=>{
      setTimeout(() => {
        let result = Object.assign(this.findNoteById(id), updatedContent);
       this.pushToLocalStorage();
        resolve(result);
      }, 300);
    })
   
  }


  updateNotePriority(id, priority) {
    return new Promise(resolve=>{
      setTimeout(() => {
        let result = (this.findNoteById(id).priority += priority);
        this.pushToLocalStorage();
        resolve(result);
      }, 0);
    })
   
  }

  filterNotesByQuery(query) {
    return new Promise(resolve=>{
      setTimeout(() => {
        let newNote = [];
        for (let element of this.notes) {
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
    
  }
  pushToLocalStorage(){
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
}
