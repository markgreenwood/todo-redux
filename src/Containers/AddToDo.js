import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let AddTodo = ({ dispatch }) => { // eslint-disable-line
  let _input;

  return (
    <div>
      <form onSubmit={ e => {
        e.preventDefault();
        if (!_input.value.trim()) {
          return;
        }
        dispatch(addTodo(_input.value));
        _input.value = '';
      }}>
        <TextField id="newtodo" ref={ (node) => {
          _input = node.input;
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
