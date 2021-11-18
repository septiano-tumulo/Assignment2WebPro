import React, {useState, useReducer} from 'react';
import TodoItem from './TodoItem';

function reducer(todos, action) {
  switch(action.type) {
    case 'add-todo':
      return [...todos, addTodo(action.payload.text)];
    case 'flip':
      return todos.map((todo) => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      });
    case 'delete':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'add-todo', payload: { text: text } });
    setText('');
  }

  // console.log(todos);

  return(
    <div className="my-4 py-4 bg-dark bg-gradient text-center shadow-lg rounded-3">
      <div className="mx-auto pt-2 pb-5 w-50 border border-light rounded-3">
      <h1 className="text-white fw-bold">Simple TodoApp</h1>

      <form onSubmit={handleSubmit}>
        <input className="me-1" type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <button className="btn-light btn-sm btn-outline-secondary" type="Submit">Add Todo</button>
      </form>
      {
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }
      </div>
    </div>
  );
}

export default Todos;
