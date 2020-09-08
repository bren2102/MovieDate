import { combineReducers } from 'redux';
import userReducer from './currentUser';
import selectReducer from './currentSelected';

const rootReducer = combineReducers({
  currentUser: userReducer,
  currentPage: selectReducer,
});

export default rootReducer;
