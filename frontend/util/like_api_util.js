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
