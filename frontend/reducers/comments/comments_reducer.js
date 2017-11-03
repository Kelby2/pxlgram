import { RECEIVE_ALL_COMMENTS } from '../../actions/comment_actions';

const CommentsReducer = (initialState = [], action) => {
  let newState;
  switch (action.type) {
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
