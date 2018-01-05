import { RECEIVE_USER,
        RECEIVE_ALL_USERS,
        RECEIVE_SEARCH_RESULTS,
        UPDATE_USER } from '../../actions/user_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      newState = Object.assign({}, oldState, action.users);
      return newState;
    case RECEIVE_USER:
      newState = Object.assign(
        {},
        oldState,
        { [action.user.username]: action.user });
      return newState;
    case UPDATE_USER:
      const prevUsername = Object.keys(oldState).find((name) =>
        oldState[name].id === action.user.id)
      newState = Object.assign(
        {},
        oldState,
        { [action.user.username] : action.user }
      )
      delete newState[prevUsername];
      return newState;
    default:
      return oldState;
  }
}

export default UsersReducer;
