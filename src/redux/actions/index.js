export const addNote = (data) => {
  return {
    type: 'ADD_NEW_NOTE',
    payload: data,
  };
};

export const editNote = (data) => {
  return {
    type: 'EDIT_NOTE',
    payload: data,
  };
};

export const deleteNote = (data) => {
  return {
    type: 'DELETE_NOTE',
    payload: data,
  };
};
