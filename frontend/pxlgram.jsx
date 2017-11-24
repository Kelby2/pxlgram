import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { searchUsers, getUser } from './actions/user_actions'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');

  let store;

  if (window.currentUser) {
    const preloadedState = { session:
      { currentUser: window.currentUser }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={ store } />, rootEl);

  window.store = store;
  window.searchUsers = searchUsers;
  window.getUser = getUser;
});
