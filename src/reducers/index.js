import {combineReducers} from 'redux';
import userReducer from './currentUser';

const rootReducer = combineReducers({
  currentUser: userReducer,
});

export default rootReducer;