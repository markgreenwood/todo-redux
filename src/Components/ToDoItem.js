import React, { PropTypes } from 'react';
import './ToDoItem.css';

const Todo = ({ text, completed }) => {
  return (
    <li
      style={{ 
        textDecoration: completed ? 'line-through' : 'none'
      }}>
      {text}
    </li>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;