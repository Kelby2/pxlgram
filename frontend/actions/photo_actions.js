import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO_PAGE = 'RECEIVE_PHOTO_PAGE';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const CLEAR_PHOTOS = 'CLEAR_PHOTOS';
import { fetchUser } from './user_actions';
import { fetchComments, fetchComment } from './comment_actions';

//photos, photo, photoId is moved to the reducer under action
export const fetchPhotos = photos => {
  return ({
    type: RECEIVE_ALL_PHOTOS,
    photos
  })
}

export const fetchPhotoPage = photos => {
  return ({
    type: RECEIVE_PHOTO_PAGE,
    photos,
  })
}

export const fetchPhoto = photo => {
  return ({
    type: RECEIVE_PHOTO,
    photo
  })
};

export const removePhoto = photoId => {
  return ({
    type: REMOVE_PHOTO,
    photoId,
  })
}

export const getPhotosByPage = page => dispatch => {
  PhotoApiUtil.getPhotosByPage(page)
              .then(photos => dispatch(fetchPhotoPage(photos)))
}

export const getUserPhotos = username => dispatch => (
  PhotoApiUtil.getUserPhotos(username)
              .then(photos => dispatch(fetchPhotos(photos)))
)

export const getPhotos = () => dispatch => (
  PhotoApiUtil.getPhotos()
              .then(photos => dispatch(fetchPhotos(photos)))
)

export const getPhoto = photo => dispatch => (
  PhotoApiUtil.getPhoto(photo.id)
              .then(photo => dispatch(fetchPhoto(photo)))
)

export const addLike = photo_id => dispatch => {
  PhotoApiUtil.addLike(photo_id)
              .then(photo => dispatch(fetchPhoto(photo)))
}

export const deleteLike = (photo_id) => dispatch => {
  PhotoApiUtil.deleteLike(photo_id)
              .then(photo => dispatch(fetchPhoto(photo)))
}

export const getPhotoComments = (photo_id) => dispatch => {
  PhotoApiUtil.getPhotoComments(photo_id)
              .then(comments => dispatch(fetchComments(comments)))
}

export const addComment = comment => dispatch => {
  return PhotoApiUtil.addComment(comment)
              .then(comment => dispatch(fetchComment(comment)))
}

export const deleteComments = photo_id => dispatch => {
  PhotoApiUtil.deleteComment(photo_id)
              .then(photo => dispatch(fetchPhoto(photo)))
}

export const addPhoto = (photo) => dispatch => (
  PhotoApiUtil.addPhoto(photo)
              .then(user => dispatch(fetchUser(user)))
)

export const deletePhoto = (photo) => dispatch => (
  PhotoApiUtil.deletePhoto(photo)
              .then(photo => dispatch(removePhoto(photo)))
)
