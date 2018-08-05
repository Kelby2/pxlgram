import {
  RECEIVE_SEARCH_RESULTS,
  CLEAR_USERS_SEARCH,
  RECEIVE_USER_SUGGESTIONS,
  CLEAR_USER_SUGGESTIONS } from '../actions/user_actions';

const initialState = {
  searchResults: null,
  userSuggestionResults: null,
};

const UIReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      newState = {...oldState, searchResults: [] };
      Object.keys(action.users).forEach(username => {
        newState.searchResults.push(action.users[username]);
      });
      return newState;
    case CLEAR_USERS_SEARCH:
      newState = {...oldState, searchResults: null };
      return newState;
    case RECEIVE_USER_SUGGESTIONS:
      newState = {...oldState, userSuggestionResults: [] };
      Object.keys(action.users).forEach(username => {
        newState.userSuggestionResults.push(action.users[username]);
      });
      return newState;
    case CLEAR_USER_SUGGESTIONS:
      newState = {...oldState, userSuggestionResults: null };
      return newState;
    default:
      return oldState;
  }
};


export default UIReducer;
