import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { createStore } from 'redux';

const store = createStore(rootReducer,
  {
    movies: [],
    appointments: [],
    users: [],
  });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

