// importing...
import React, { useState, useReducer } from 'react';
import todoListTypes from './Action.types';
import { addTodo, removeTodo, editTodo } from './Actions';

// create app context:
const TodoContext = React.createContext();

// PROVIDER COMPONENT:
const TodoProvider = ({ children }) => {
  // app states:
  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState({ display: false, msg: `` });

  // REDUCER FACTORY, control the state:
  const reducer = (state, action) => {
    switch (action.type) {
      case todoListTypes.ADD_TODO:
        const isExisted = state.todosList.find(
          ({ title }) => title === action.payload.title
        );

        let updatedList = [];
        if (isExisted) {
          updatedList = [...state.todosList];
          setError({
            display: true,
            msg: `No changes detected from the last time :)`,
          });
          setTimeout(() => setError({ display: false }), 2000);
        } else {
          updatedList = [...state.todosList, { ...action.payload }];
          setError({ display: false });
        }
        return {
          ...state,
          todosList: updatedList,
        };

      case todoListTypes.REMOVE_TODO:
        const filteredListAfterRemove = state.todosList.filter(
          ({ id }) => id !== action.payload
        );
        return { ...state, todosList: filteredListAfterRemove };

      case todoListTypes.EDIT_TODO:
        const findItemToEdit = state.todosList.find(
          ({ id }) => id === action.payload
        );

        setInputVal(findItemToEdit.title);
        return { ...state };

      default:
        return state;
    }
  };

  // initial state:
  const INITIAL_STATE = {
    todosList: [],
  };

  // reducer
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // reducer actions:
  const addTodoItem = (todo) => {
    dispatch(addTodo(todo));
  };

  const removeTodoItem = (id) => {
    dispatch(removeTodo(id));
  };

  const editTodoItem = (id) => {
    dispatch(editTodo(id));
  };

  return (
    <TodoContext.Provider
      value={{
        state,
        addTodoItem,
        removeTodoItem,
        editTodoItem,
        inputVal,
        setInputVal,
        error,
        setError,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
