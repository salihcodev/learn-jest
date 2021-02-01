import './style.sass';
import { useContext } from 'react';
import { TodoContext } from '../../context/Context';
import { v4 as uuidv4 } from 'uuid';

// form component:
const AddingTodosForm = () => {
  const { addTodoItem, inputVal, setInputVal, error, setError } = useContext(
    TodoContext
  );

  const handelInputVal = (val) => {
    setInputVal(val);
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    if (inputVal) {
      setError({ display: false });
      addTodoItem({ id: uuidv4(), title: inputVal.trim() });
      setInputVal('');
    } else {
      setError({ display: true, msg: `You can't submit empty Task` });
      setTimeout(() => setError({ display: false }), 2000);
    }
  };

  return (
    <section className="form-container">
      <form onSubmit={handelOnSubmit}>
        <input
          onChange={(e) => {
            handelInputVal(e.target.value);
          }}
          value={inputVal}
          type="text"
          name="add-to-do"
          id="add-to-do"
          placeholder="Wake up, Finish first jest task..."
        />
        <input type="submit" className="submitting" value="Add TODO" />
      </form>
      {error.display && (
        <small className="error-msg">
          <span className="txt">{error.msg}</span>
          <button
            className="close"
            onClick={() => setError({ display: false })}
          >
            +
          </button>
        </small>
      )}
    </section>
  );
};

export default AddingTodosForm;
