import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>ayo</h1>, rootEl);

  window.login = login;
  window.logout = logout;
  window.signup = signup;
});
