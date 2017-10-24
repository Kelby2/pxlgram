import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SessionErrorsReducer = (initialState) = [], action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors.responseJSON;
      newState = Object.assign({}, initialState, { errors } );
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, initialState, { errors: [] } );
      return newState;
    default:
      return initialState;
  }
};

export default SessionErrorsReducer;
