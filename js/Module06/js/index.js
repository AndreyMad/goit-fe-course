"use strict";

class Notepad{
  constructor(notes = []){
    this._notes = notes
  }

  static Priority={
    LOW: 0,
    NORMAL: 1,
    HIGH: 2
  }
  get notes(){
    return this._notes;
  }

  findNoteById = function(id) {
    for (let element of notepad.notes) {
      if (id === element.id) {
        return element;
      }
    }
  }

 saveNote = function(note) {
    notepad.notes.push(note);
    return note;
  }

  deleteNote = function(id) {
    let indexToDelete = this.notes.indexOf(this.findNoteById(id));
    this.notes.splice(indexToDelete, 1);
  }

   updateNoteContent = function(id, updatedContent) {
    Object.assign(this.findNoteById(id), updatedContent) 
  }
  

  updateNotePriority= function(id, priority) {
    this.findNoteById(id).priority = priority;
  }


  filterNotesByQuery= function(query) {
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

  filterNotesByPriority= function(priority) {
    let newArr = [];
    for (let element of this.notes) {
      if (priority === element.priority) {
        newArr.push(element);
      }
    }
    return newArr;
  }
}





//Далее идет код для проверки работоспособности объекта, вставь его в конец скрипта. Твоя реализация методов объекта notepad должна проходить этот тест.

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Notepad.Priority.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Notepad.Priority.NORMAL,
  },
];

const notepad = new Notepad(initialNotes);


console.log('Все текущие заметки: ', notepad.notes);


notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Notepad.Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.LOW,
});

console.log('Все текущие заметки после добавления: ', notepad.notes);


//notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

// console.log(
//   'Заметки после обновления приоритета для id-4: ',
//   notepad.getNotes(),
// );


// console.log(
//   'Заметки после обновления приоритета для id-3: ',
//   notepad.getNotes(),
// );


// console.log(
//   'Отфильтровали заметки по ключевому слову "html": ',
//   notepad.filterNotesByQuery('html'),
// );


// console.log(
//   'Отфильтровали заметки по ключевому слову "javascript": ',
//   notepad.filterNotesByQuery('javascript'),
// );


// console.log(
//   'Отфильтровали заметки по нормальному приоритету: ',
//   notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
// );


// notepad.updateNoteContent('id-3', {
//   title: 'Get comfy with React.js or Vue.js',
// });

// console.log(
//   'Заметки после обновления контента заметки с id-3: ',
//   notepad.getNotes(),
// );


// notepad.deleteNote('id-2');
// console.log('Заметки после удаления с id -2: ', notepad.notes);