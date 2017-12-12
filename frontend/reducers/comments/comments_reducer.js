import { RECEIVE_PHOTO_COMMENTS, RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT } from '../../actions/comment_actions';

const CommentsReducer = (initialState = [], action) => {
  let newState;
  
  switch (action.type) {
    case RECEIVE_COMMENT:
      newState = Object.assign(
        {},
        initialState,
        { [action.comment.id]: action.comment }
      )
      return newState;
    case RECEIVE_PHOTO_COMMENTS:
    case RECEIVE_ALL_COMMENTS:
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
