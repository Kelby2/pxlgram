 import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//TEST IMPORT
import { login, logout, signup } from './actions/session_actions';
import { getPhotos,
        getPhoto,
        addPhoto,
        deletePhoto,
        editPhoto } from './actions/photo_actions';
//END

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

  //FUNCS FOR TESTING//

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.editPhoto = editPhoto;
  window.getPhoto = getPhoto;
  window.getPhotos = getPhotos;
  window.addPhoto = addPhoto;
  window.deletePhoto = deletePhoto;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  //TESTING END//
});
