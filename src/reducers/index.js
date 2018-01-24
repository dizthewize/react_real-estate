import { combineReducers } from 'redux';
import homesReducer from './homesReducer'

const rootReducer = combineReducers({
  homes: homesReducer
});

export default rootReducer;
