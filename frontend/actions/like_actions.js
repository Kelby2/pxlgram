import * as LikeApiUtil from '../util/like_api_util';

export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const addNewLike = photo => {
  return ({
    type: ADD_LIKE,
    photo
  })
}

const removeLike = photo => {
  return ({
    type: REMOVE_LIKE,
    photo,
  })
}

export const addLike = photo_id => dispatch => {
  return LikeApiUtil.addLike(photo_id)
              .then(photo => dispatch(addNewLike(photo)))
}

export const deleteLike = photo_id => dispatch => {
  return LikeApiUtil.deleteLike(photo_id)
              .then(photo => dispatch(removeLike(photo)))
}
