import { RECEIVE_ERRORS,
        RECEIVE_PHOTO,
        CLEAR_ERRORS
      } from '../../actions/session_actions';

const PhotosErrorsReducer = (initialState = [], action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    case RECEIVE_PHOTO:
    case CLEAR_ERRORS:
      return [];
    default:
      return initialState;
  }
};

export default PhotosErrorsReducer;
