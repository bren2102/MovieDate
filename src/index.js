import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index';

const initialState = {
  currentUser: {},
  currentPage: '',
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
