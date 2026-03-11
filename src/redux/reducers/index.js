const initialState = {
  todos: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_NOTE':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'EDIT_NOTE':
      return {
        ...state,
        todos: state.todos.map((note) => {
          if (note.id === action.payload.id) {
            return {
              ...note,
              title: action.payload.title,
              text: action.payload.text,
            };
          }
          return note;
        }),
      };
    case 'DELETE_NOTE':
      return {
        ...state,
        todos: state.todos.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};
export default todoReducer;
