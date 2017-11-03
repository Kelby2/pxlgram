export const getComments = () => {
  return $.ajax({
    method: 'get',
    url: 'api/comments',
  })
}
