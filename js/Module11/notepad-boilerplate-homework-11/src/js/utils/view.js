


function renderNoteList(listRef, note) {
  const listItems = note.map(item => createListItem(item));

  listRef.append(...listItems);
}

