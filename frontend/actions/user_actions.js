import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_USERS_SEARCH = 'CLEAR_USERS_SEARCH';
export const UPDATE_USER = 'UPDATE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';
export const RECEIVE_USER_SUGGESTIONS = 'RECEIVE_USER_SUGGESTIONS';
export const CLEAR_USER_SUGGESTIONS = 'CLEAR_USER_SUGGESTIONS';

const fetchUser = user => {
  return ({
    type: RECEIVE_USER,
    user
  });
};

const updateUser = user => {
  return ({
    type: UPDATE_USER,
    user,
  });
};

const fetchSearchResults = users => {
  return ({
    type: RECEIVE_SEARCH_RESULTS,
    users
  });
};

const clearUsersSearch = () => ({ type: CLEAR_USERS_SEARCH });

const fetchUserSuggestions = users => {
  return ({
    type: RECEIVE_USER_SUGGESTIONS,
    users,
  });
};

const clearUserSuggestions = () => ({ type: CLEAR_USER_SUGGESTIONS });

const receiveUserErrors = errors => {
  return ({
    type: RECEIVE_USER_ERRORS,
    errors: errors.responseJSON
  });
};

const removeUserErrors = () => {
  return ({
    type: CLEAR_USER_ERRORS,
    errors: []
  });
};


export const getUser = username => dispatch => (
  UserApiUtil.getUser(username).then(user => dispatch(fetchUser(user)))
);

export const editUser = user => dispatch => {
  return UserApiUtil.editUser(user)
    .then(user => dispatch(updateUser(user)),
          errors => dispatch(receiveUserErrors(errors))
        );
};

export const searchUsers = query => dispatch => (
  UserApiUtil.searchUsers(query).then(users => dispatch(fetchSearchResults(users)))
);

export const clearSearch = () => dispatch => (
  dispatch(clearUsersSearch())
);

export const getUserSuggestions = dispatch => (
  UserApiUtil.searchUserSuggestions().then(users => dispatch(fetchUserSuggestions(users)))
);

export const clearSuggestions = dispatch => (
  dispatch(clearUserSuggestions())
);

export const clearUserErrors = () => dispatch => {
  return dispatch(removeUserErrors());
};
