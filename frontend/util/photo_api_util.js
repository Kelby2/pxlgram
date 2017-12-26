export const getPhotos = () => {
  return $.ajax({
    method: 'get',
    url: 'api/photos',
  })
}

export const getPhotosPage = (pageNumber) => {
  return $.ajax({
    method: 'get',
    url: `api/photos?page=${pageNumber}`
  })
}

export const getPhotosGrid = pageNumber => {
  return $.ajax({
    method: 'get',
    url: `api/photos?page=${pageNumber}&explore=true`
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
