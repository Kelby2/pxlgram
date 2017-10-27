import { RECEIVE_ERRORS,
        RECEIVE_CURRENT_USER,
        CLEAR_ERRORS
      } from '../../actions/session_actions';

const SessionErrorsReducer = (initialState = [], action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    case RECEIVE_CURRENT_USER:
    case CLEAR_ERRORS:
      return [];
    default:
      return initialState;
  }
};

export default SessionErrorsReducer;
