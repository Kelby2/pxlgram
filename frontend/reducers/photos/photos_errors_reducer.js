import { RECEIVE_ERRORS,
        CLEAR_ERRORS
      } from '../../actions/session_actions';

const PhotosErrorsReducer = (initialState = [], action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ERRORS:
    case CLEAR_ERRORS:
      return [];
    default:
      return initialState;
  }
};

export default PhotosErrorsReducer;
