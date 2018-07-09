import * as CommentApiUtil from '../util/comment_api_util';
import { fetchPhoto } from './photo_actions';

export const RECEIVE_PHOTO_COMMENTS = 'RECEIVE_PHOTO_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

const fetchPhotoComments = comments => {
  return ({
    type: RECEIVE_PHOTO_COMMENTS,
    comments,
  });
};

const fetchComment = comment => {
  return ({
    type: RECEIVE_COMMENT,
    comment
  });
};

const removeComment = comment => {
  return ({
    type: DELETE_COMMENT,
    comment,
  });
};

export const getPhotoComments = photo_id => dispatch => {
  return CommentApiUtil.getPhotoComments(photo_id)
              .then(comments => dispatch(fetchPhotoComments(comments)));
};

export const addComment = comment => dispatch => {
  return CommentApiUtil.addComment(comment)
              .then(comment => dispatch(fetchComment(comment)));
};

export const deleteComment = comment_id => dispatch => {
  return CommentApiUtil.deleteComment(comment_id)
              .then(comment => dispatch(removeComment(comment)));
};
