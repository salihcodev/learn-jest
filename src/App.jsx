import React from 'react';
import './App.css';
import AddingTodosForm from './components/add-item-form/AddingTodosForm.comp';
import TodoList from './components/todo-list/TodoList.comp';

function App({ appTitle }) {
  return (
    <main className="to-do-wrapper">
      <div className="app-container">
        <h2 className="wrapper-heading">{appTitle}</h2>
        {/* form control */}
        <AddingTodosForm />
        <TodoList />
      </div>
    </main>
  );
}

export default App;
