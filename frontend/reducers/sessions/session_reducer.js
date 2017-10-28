import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const SessionReducer = (oldState = { currentUser: null }, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign(
        {},
        oldState,
        { currentUser: action.user }
      );
      return newState;
    default:
      return oldState;
  }
}

export default SessionReducer;