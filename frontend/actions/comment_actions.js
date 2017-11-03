import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';

export const fetchComments = comments => {
  return ({
    type: RECEIVE_ALL_COMMENTS,
    comments
  })
}

export const getComments = () => dispatch => (
  CommentApiUtil.getComments()
      .then(comments => dispatch(fetchComments(comments)))
)
