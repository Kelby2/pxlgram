import { RECEIVE_USER_ERRORS,
    CLEAR_USER_ERRORS } from '../../actions/user_actions';

const UsersErrorsReducer = (initialState = [], action) => {
  Object.freeze(initialState);
  let newState;
  
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case CLEAR_USER_ERRORS:
      return [];
    default:
      return initialState;
  }
};

export default UsersErrorsReducer;
