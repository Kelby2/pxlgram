import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SessionReducer = (initialState = { current_user: null }, action) => {
  Object.freeze(initialState);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign(
        {},
        initialState,
        { currentUser: action.user }
      );
      return newState;
    default:
      return initialState;
  }
}

export default SessionReducer;
