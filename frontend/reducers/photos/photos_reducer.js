import { RECEIVE_PHOTO_PAGE, RECEIVE_PHOTO_GRID,
        RECEIVE_USER_PHOTOS, RECEIVE_PHOTO,
        REMOVE_PHOTO, CLEAR_PHOTOS } from '../../actions/photo_actions';
import { RECEIVE_COMMENT, DELETE_COMMENT } from '../../actions/comment_actions';
import { ADD_LIKE, REMOVE_LIKE } from '../../actions/like_actions';

const PhotosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_PHOTO_PAGE:
    case RECEIVE_PHOTO_GRID:
    case RECEIVE_USER_PHOTOS:
      newState = Object.assign(
        {},
        oldState,
        action.photos
      );
      return newState;
    case ADD_LIKE:
    case REMOVE_LIKE:
    case RECEIVE_PHOTO:
      newState = Object.assign(
        {},
        oldState,
        { [action.photo.id]: action.photo }
      );
      return newState;
    case RECEIVE_COMMENT:
      const photo = oldState[action.comment.photo_id];
      const photoCopy = Object.assign({}, photo);
      photoCopy.commentIds = photoCopy.commentIds.concat(action.comment.id);
      newState = Object.assign(
        {},
        oldState,
        { [photoCopy.id]: photoCopy }
      );
      return newState;
    case DELETE_COMMENT:
      newState = Object.assign(
        {},
        oldState
      );
      newState[action.comment.photo_id].commentIds = newState[action.comment.photo_id].commentIds.filter(id => id !== action.comment.id);
      return newState;
    case REMOVE_PHOTO:
      newState = Object.assign({}, oldState);
      delete newState[action.photoId];
      return newState;
    case CLEAR_PHOTOS:
      return [];
    default:
      return oldState;
  }
};

export default PhotosReducer;
