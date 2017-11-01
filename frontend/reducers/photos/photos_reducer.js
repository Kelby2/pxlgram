import { RECEIVE_ALL_PHOTOS,
        RECEIVE_PHOTO,
        REMOVE_PHOTO,
        CLEAR_PHOTOS } from '../../actions/photo_actions';

const PhotosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      newState = Object.assign(
        {},
        oldState,
        action.photos
      );
      return newState;
    case RECEIVE_PHOTO:
      newState = Object.assign(
        {},
        oldState,
        { [action.photo.id]: action.photo }
      )
      return newState;
    case REMOVE_PHOTO:
      newState = Object.assign({}, oldState)
      delete newState[action.photoId]
      return newState;
    case CLEAR_PHOTOS:
      return [];
    default:
      return oldState;
  }
}

export default PhotosReducer;
