import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_PHOTO_COMMENTS = 'RECEIVE_PHOTO_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const fetchComments = comments => {
  return ({
    type: RECEIVE_ALL_COMMENTS,
    comments
  })
}

export const fetchPhotoComments = comments => {
  return ({
    type: RECEIVE_PHOTO_COMMENTS,
    comments,
  })
}

export const fetchComment = comment => {
  return ({
    type: RECEIVE_COMMENT,
    comment
  })
}

export const getComments = () => dispatch => {
  return CommentApiUtil.getComments()
      .then(comments => dispatch(fetchComments(comments)))
}

export const getPhotoComments = photo_id => dispatch => {
  return CommentApiUtil.getPhotoComments(photo_id)
              .then(comments => dispatch(fetchPhotoComments(comments)))
}

export const addComment = comment => dispatch => {
  return CommentApiUtil.addComment(comment)
              .then(comment => dispatch(fetchComment(comment)))
}

export const deleteComments = photo_id => dispatch => {
  return PhotoApiUtil.deleteComment(photo_id)
              .then(photo => dispatch(fetchPhoto(photo)))
}
