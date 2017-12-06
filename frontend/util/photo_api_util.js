export const getPhotos = () => {
  return $.ajax({
    method: 'get',
    url: 'api/photos',
  })
}

export const getPhotosByPage = pageNumber => {
  return $.ajax({
    method: 'get',
    url: `api/photos?page=${pageNumber}`
  })
}

export const getPhotosByGrid = pageNumber => {
  return $.ajax({
    method: 'get',
    url: `api/photos/grid?page=${pageNumber}`
  })
}

export const getUserPhotos = username => {
  return $.ajax({
    method: 'get',
    url: `api/users/${username}/photos`
  })
}

export const getPhoto = id => {
  return $.ajax({
    method: 'get',
    url: `api/photos/${id}`,
  })
}

export const addPhoto = photo => {
  return $.ajax({
    method: 'post',
    url: 'api/photos',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: photo,
  })
};

export const deletePhoto = photo => {
  return $.ajax({
    method: 'delete',
    url: `api/photos/${photo.id}`
  })
}

export const addLike = photo_id => {
  return $.ajax({
    method: 'post',
    url: 'api/likes',
    data: { photo_id }
  })
}

export const deleteLike = photo_id => {
  return $.ajax({
    method: 'delete',
    url: `api/likes/${photo_id}`
  })
}
