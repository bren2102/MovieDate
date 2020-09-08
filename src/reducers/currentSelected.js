import { SELECTED_PAGE } from '../actions/index';

const selectReducer = (state = [], action) => {
  switch (action.type) {
    case SELECTED_PAGE: {
      return action.currentPage;
    }
    default:
      return state;
  }
};

export default selectReducer;
