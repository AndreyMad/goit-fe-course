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

  saveNote(note) {
    this.notes.push(note);
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
