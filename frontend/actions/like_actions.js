import * as LikeApiUtil from '../util/like_api_util';

export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const addLike = photo_id => dispatch => {
  return PhotoApiUtil.addLike(photo_id)
              .then(photo => dispatch(fetchPhoto(photo)))
}

export const deleteLike = photo_id => dispatch => {
  return PhotoApiUtil.deleteLike(photo_id)
              .then(photo => dispatch(fetchPhoto(photo)))
}
