import { RECEIVE_SEARCH_RESULTS,
         CLEAR_USERS_SEARCH } from '../actions/user_actions';

const UIReducer = (oldState = { searchResults: null }, action) => {
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
    default:
      return oldState;
  }
};


export default UIReducer;
