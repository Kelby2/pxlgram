import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS'
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO'
export const REMOVE_PHOTO = 'REMOVE_PHOTO'
export const CLEAR_PHOTOS = 'CLEAR_PHOTOS'
import { fetchUser } from './user_actions'

//photos, photo, photoId is moved to the reducer under action
export const fetchPhotos = photos => {
  return ({
    type: RECEIVE_ALL_PHOTOS,
    photos
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

export const clearAllPhotos = () => {
  return ({
    type: CLEAR_PHOTOS,
    photos: [],
  })
}

export const clearPhotos = () => dispatch => (
  dispatch(clearAllPhotos())
)

export const getUserPhotos = (userId) => dispatch => (
  PhotoApiUtil.getUserPhotos(userId).then(photos => dispatch(fetchPhotos(photos)))
)

export const getPhotos = () => dispatch => (
  PhotoApiUtil.getPhotos().then(photos => dispatch(fetchPhotos(photos)))
)

export const getPhoto = (photo) => dispatch => (
  PhotoApiUtil.getPhoto(photo.id).then(photo => dispatch(fetchPhoto(photo)))
)

export const addLike = (photo_id) => dispatch => {
  debugger
  PhotoApiUtil.addLike(photo_id).then(photo => dispatch(fetchPhoto(photo)))
}

export const addPhoto = (photo) => dispatch => (
  PhotoApiUtil.addPhoto(photo).then(user => dispatch(fetchUser(user)))
)

export const editPhoto = (photo) => dispatch => (
  PhotoApiUtil.editPhoto(photo).then(photo => dispatch(fetchPhoto(photo)))
)

export const deletePhoto = (photo) => dispatch => (
  PhotoApiUtil.deletePhoto(photo).then(photo => dispatch(removePhoto(photo)))
)
