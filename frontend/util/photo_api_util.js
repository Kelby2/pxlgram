export const getPhotos = () => {
  return $.ajax({
    method: 'get',
    url: 'api/photos',
  })
}

export const getUserPhotos = (userId) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${userId}/photos`
  })
}

export const getPhoto = (id) => {
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

export const editPhoto = photo => {
  return $.ajax({
    method: 'patch',
    url: `api/photos/${photo.id}`,
    data: { photo },
  })
}

export const deletePhoto = photo => {
  return $.ajax({
    method: 'delete',
    url: `api/photos/${photo.id}`
  })
}
