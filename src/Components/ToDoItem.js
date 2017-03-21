import React, { PropTypes } from 'react';
import './ToDoItem.css';

const Todo = ({ onClick, text, completed }) => {
  return (
    <li
      onClick={onClick} 
      style={{ 
        textDecoration: completed ? 'line-through' : 'none'
      }}>
      {text}
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;

    // <input type="checkbox" checked={completed}/>
