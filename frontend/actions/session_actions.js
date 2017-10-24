import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

export const receiveErrors = errors => {
  type: RECEIVE_ERRORS,
  errors: errors.responseJSON
};

export const login = user => dispatch => {
  return SessionApiUtil.login(user)
    .then(user => {
      return dispatch(receiveCurrentUser(user));
    },
    (errors) => {
      return dispatch(receiveErrors(errors));
    });
};

export const logout = user => dispatch => {
  return SessionApiUtil.logout()
    .then(res => {
      return dispatch(receiveCurrentUser(null));
    },
    (errors) => {
      return dispatch(receiveErrors(errors));
    })
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup()
    .then((user) => {
      return dispatch(receiveCurrentUser(user));
    },
    (errors) => {
      return dispatch(receiveErrors(errors));
    });
};
