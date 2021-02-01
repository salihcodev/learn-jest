import todoListTypes from './Action.types';

export const addTodo = (todo) => ({
  type: todoListTypes.ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: todoListTypes.REMOVE_TODO,
  payload: id,
});

export const editTodo = (id) => ({
  type: todoListTypes.EDIT_TODO,
  payload: id,
});
