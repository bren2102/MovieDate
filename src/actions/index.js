export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = currentUser => ({
  type: LOGIN_USER,
  currentUser,
});