import React from 'react';
import DisplayFilter from './DisplayFilter';
import AddTodo from '../Containers/AddToDo';
import VisibleTodoList from '../Containers/VisibleTodoList';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <AddTodo />
        <VisibleTodoList />
        <DisplayFilter />
      </div>
    </MuiThemeProvider>
  );
}

export default App;

