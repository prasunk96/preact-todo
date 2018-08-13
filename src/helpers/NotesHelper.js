


export const findNoteIndexById = (id, notes) => {
  return notes.findIndex(note => note.id === id); 
}

export const setCheckedStatusById = (note, notes) => {
  let notesClone = [...notes];
  let indexToUpdate = findNoteIndexById(note.id, notesClone);
  notesClone[indexToUpdate].checked = note.checked;
  return notesClone;
}

export const deleteNoteById = (id, notes) => {
  let notesClone = JSON.parse(JSON.stringify(notes));
  let indexToDelete = findNoteIndexById(id, notesClone);
  notesClone.splice(indexToDelete, 1);
  return notesClone;
}