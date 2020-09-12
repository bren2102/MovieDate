import { LOGIN_USER } from '../actions/index';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return action.currentUser;
    }
    default:
      return state;
  }
};

export default userReducer;
