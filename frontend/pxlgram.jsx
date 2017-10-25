import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//TEST IMPORT
import { login, logout, signup } from './actions/session_actions';
//END

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<Root store={ store } />, rootEl);

  //FUNCS FOR TESTING//
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  //TESTING END//
});
