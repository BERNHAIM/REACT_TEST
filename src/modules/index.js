import { combineReducers } from 'redux';
import counter from './counter';
import member from './member';

const rootReducer = combineReducers({
  counter,
  member
});

export default rootReducer;