import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

// const data = [
//   {
//     id: 0,
//     text: 'Do this',
//     completed: false,
//   },
//   {
//     id: 1,
//     text: 'Do that',
//     completed: false,
//   },
//   {
//     id: 2,
//     text: 'Finish everything',
//     completed: false,
//   },
//   {
//     id: 3,
//     text: 'Clean the house',
//     completed: true,
//   }
// ];

// const initialState = {
//   todos: data,
//   visibilityFilter: VisibilityFilter.SHOW_ALL,
// };

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;