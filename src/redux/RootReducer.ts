// Combine all reducers into a root reducer
import { combineReducers } from 'redux';
import todosSlice from './reducer/todosSlice'; // Import your todos slice reducer

export const rootReducer = combineReducers({
  todos: todosSlice, // Add your todos slice to the state
});