import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';

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