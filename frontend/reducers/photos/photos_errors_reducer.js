import { RECEIVE_PHOTO_ERRORS,
  CLEAR_PHOTO_ERRORS } from '../../actions/photo_actions';

const PhotosErrorsReducer = (initialState = [], action) => {
  Object.freeze(initialState);
  let newState;

  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return action.errors;
    case CLEAR_PHOTO_ERRORS:
      return [];
    default:
      return initialState;
  }
};

export default PhotosErrorsReducer;
