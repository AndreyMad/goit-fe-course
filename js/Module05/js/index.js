"use strict";
const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
};

const notepad = {
  notes: [],
  getNotes() {
    return notepad.notes;
  },
  findNoteById(id) {
    for (let element of notepad.notes) {
      if (id === element.id) {
        return element;
      }
    }
  },
  saveNote(note) {
    notepad.notes.push(note);
    return notepad.notes;
  },
  deleteNote(id) {
    let indexToDelete = this.notes.indexOf(this.findNoteById(id));
    this.notes.splice(indexToDelete, 1);
  },





  updateNoteContent(id, updatedContent) {
    this.findNoteById(id).title = updatedContent.title;
  },
  
  
  
  
  
  updateNotePriority(id, priority) {
    this.findNoteById(id).priority = priority;
  },

  
  
  
  
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
  },

  filterNotesByPriority(priority) {
    let newArr = [];
    for (let element of this.notes) {
      if (priority === element.priority) {
        newArr.push(element);
      }
    }
    return newArr;
  }
};
//Далее идет код для проверки работоспособности объекта, вставь его в конец скрипта. Твоя реализация методов объекта notepad должна проходить этот тест.

notepad.saveNote({
  id: "id-1",
  title: "JavaScript essentials",
  body:
    "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
  priority: Priority.HIGH
});

notepad.saveNote({
  id: "id-2",
  title: "Refresh HTML and CSS",
  body:
    "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
  priority: Priority.NORMAL
});

notepad.saveNote({
  id: "id-3",
  title: "Get comfy with Frontend frameworks",
  body:
    "First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",
  priority: Priority.NORMAL
});

notepad.saveNote({
  id: "id-4",
  title: "Winter clothes",
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Priority.LOW
});

console.log("Все текущие заметки: ", notepad.getNotes());

// notepad.updateNotePriority('id-4', Priority.NORMAL); 
// console.log(
//   'Заметки после обновления приоритета для id-4: ',
//   notepad.getNotes(),
// );

//notepad.updateNotePriority('id-3', Priority.LOW);

// console.log(
//   'Заметки после обновления приоритета для id-3: ',
//   notepad.getNotes(),
// );

// console.log(
//   'Отфильтровали заметки по ключевому слову "html": ',
//   notepad.filterNotesByQuery('HTML'),
// );

// console.log(
//   'Отфильтровали заметки по ключевому слову "javascript": ',
//   notepad.filterNotesByQuery('javascript'),
// );

// console.log(
//   "Отфильтровали заметки по нормальному приоритету: ",
//   notepad.filterNotesByPriority(Priority.NORMAL)
// );

notepad.updateNoteContent('id-4', {
  title: 'asdasdasdasdasdasdasdasd',
});
// console.log(
//   'Заметки после обновления контента заметки с id-3: ',
//   notepad.getNotes(),
// );

// notepad.deleteNote('id-2');
// console.log('Заметки после удаления с id -2: ', notepad.getNotes());
