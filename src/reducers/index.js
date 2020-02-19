import { combineReducers } from 'redux';
import testsReducer from './testReducer';

export default combineReducers({
  tests: testsReducer,
});
