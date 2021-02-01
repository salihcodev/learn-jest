// importing...
import { useContext } from 'react';
import './style.sass';
import { TodoContext } from '../../context/Context';

// form component:
const TodoList = () => {
  const {
    state: { todosList },
    removeTodoItem,
    editTodoItem,
  } = useContext(TodoContext);

  return (
    <section className="todos-list-wrapper">
      {todosList.length > 0 ? (
        <h4 className="heading">Added items ({todosList?.length})</h4>
      ) : (
        <h4 className="heading h-center">You haven't added any TODOs yet!</h4>
      )}

      <ul className="todos-list">
        {todosList?.map(({ id, title }) => (
          <li key={id}>
            <span className="title">{title}</span>
            <div className="controllers">
              <button className="remove" onClick={() => removeTodoItem(id)}>
                <small>Remove</small>
              </button>

              <button className="edit" onClick={() => editTodoItem(id)}>
                <small>Edit</small>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
