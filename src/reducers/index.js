import { combineReducers } from 'redux';
import testsReducer from './testReducer';
import scoreReducer from './scoreReducer';

export default combineReducers({
  tests: testsReducer,
  score: scoreReducer,
});
