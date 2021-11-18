import React from 'react';

function TodoItem({todo, dispatch}) {
  return(
    <div className="px-5 text-start">
      <input className="mt-4 mx-3" type="checkbox" onChange={() => dispatch({ type: 'flip', payload: {id : todo.id} })} />  
      
      <span className="float-center me-1 px-2 border border-light text-white"  style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.text}</span>
      
      <button className="mt-4 float-end" onClick={() => dispatch({ type: 'delete', payload: {id : todo.id}})}><i class="bi bi-trash"></i></button>
    </div>
  );
}

export default TodoItem;
