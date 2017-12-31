import { RECEIVE_PHOTO_COMMENTS,
        RECEIVE_ALL_COMMENTS,
        RECEIVE_COMMENT,
        DELETE_COMMENT, } from '../../actions/comment_actions';

const CommentsReducer = (initialState = [], action) => {
  let newState;

  switch (action.type) {
    case RECEIVE_COMMENT:
      newState = Object.assign(
        {},
        initialState,
        { [action.comment.id]: action.comment }
      );
      return newState;
    case DELETE_COMMENT:
      newState = Object.assign(
        {},
        initialState
      );
      delete newState[action.comment.id];
      return newState;
    case RECEIVE_ALL_COMMENTS:
    case RECEIVE_PHOTO_COMMENTS:
      newState = Object.assign(
        {},
        initialState,
        action.comments
      );
      return newState;
    default:
      return initialState;
  }
};

export default CommentsReducer;
