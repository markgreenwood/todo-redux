import React, { PropTypes } from 'react';
import Todo from './ToDoItem';
import { List, ListItem } from 'material-ui/List';
import './ToDoList.css';

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <List className="todolist">
      { todos.map( todo => 
        <ListItem
          key={todo.id}
          primaryText={<Todo {...todo} />}
          onClick={() => onTodoClick(todo.id)}
          leftIcon={<input type="checkbox" checked={todo.completed} />}
        />
      )}
    </List>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;

          // style={{ 
          //   textDecoration: todo.completed ? 'line-through' : 'none'
          // }}