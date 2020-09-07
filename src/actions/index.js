export const LOGIN_USER = 'LOGIN_USER';
export const SELECTED_PAGE = 'SELECTED_PAGE';

export const loginUser = currentUser => ({
  type: LOGIN_USER,
  currentUser,
});

export const selectedPage = currentPage => ({
  type: SELECTED_PAGE,
  currentPage
});