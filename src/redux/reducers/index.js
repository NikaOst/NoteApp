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
    default:
      return state;
  }
};
export default todoReducer;
