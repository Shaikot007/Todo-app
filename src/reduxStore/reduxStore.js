import { createStore } from "redux";
import { todoReducer } from "../reduxReducer/todoReducer"; 

//Redux

export const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);