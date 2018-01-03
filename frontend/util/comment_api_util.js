export const getPhotoComments = photo_id => {
  return $.ajax({
    method: 'get',
    url: 'api/comments',
    data: { photo_id }
  })
}

export const addComment = comment => {
  return $.ajax({
    method: 'post',
    url: `api/photos/${comment.photo_id}/comments`,
    data: { body: comment.commentBody }
  })
}

export const deleteComment = comment_id => {
  return $.ajax({
    method: 'delete',
    url: `api/comments/${comment_id}`
  })
}
