import React from 'react';
import './NewToDoInput.css';

function NewToDoInput() {
  return (<div><h3>New Item</h3><input type="text" placeholder="Enter a new todo..." /><button>Add</button></div>);
}

export default NewToDoInput;