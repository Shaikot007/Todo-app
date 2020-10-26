import { SUBMIT, CHECK, TOGGLE, EDIT, DELETE } from "../reduxConstant/todosConstant";

//Redux reducer

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case SUBMIT:
      return [...state, action.todo];
    case CHECK:
      return [...state].map(todo => todo.key === action.check ? {...todo, checked: !todo.checked} : todo);
    case TOGGLE:
      return [...state].map(todo => todo.key === action.toggle ? {...todo, toggle: !todo.toggle} : todo);
    case EDIT:
      return [...state].map(todo => todo.key === action.key ? {...todo, todo: todo.todo = action.edittodo} : todo);
    case DELETE:
      return [...state].filter(todo => todo.key !== action.delete);
    default:
      return state;
  }
};