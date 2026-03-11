export const addNote = (data) => {
  return {
    type: 'ADD_NEW_NOTE',
    payload: data,
  };
};
