import { SUBMIT, CHECK, TOGGLE, EDIT, DELETE } from "../reduxConstant/todosConstant";

//Redux action

export const addTodoAction = (currentTodo) => {
  return {
    type: SUBMIT,
    todo: currentTodo
  }
};

export const toggleCheckAction = (key) => {
  return {
    type: CHECK,
    check: key
  }
};

export const toggleButtonAction = (key) => {
  return {
    type: TOGGLE,
    toggle: key
  }
};

export const editTodoAction = (editodo) => {
  return {
    type: EDIT,
    edittodo: editodo.todo,
    key: editodo.key
  }
};

export const deleteTodoAction = (key) => {
  return {
    type: DELETE,
    delete: key
  }
};