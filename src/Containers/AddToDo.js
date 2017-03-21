import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let AddTodo = ({ dispatch }) => { // eslint-disable-line
  let input;

  return (
    <div>
      <form onSubmit={ e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input ref={ node => {
          input = node;
        }} />
        <RaisedButton type="submit">
          Add Todo
        </RaisedButton>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;

        // <TextField hintText="Enter a to-do item" ref={node => {
        //   input = node;
        // }} />