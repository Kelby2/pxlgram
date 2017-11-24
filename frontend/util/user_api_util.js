export const getUsers = () => {
  return $.ajax({
    method: 'get',
    url: 'api/users',
  })
}

export const getUser = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${id}`,
  })
}

export const editUser = (user) => {
  return $.ajax({
    method: 'patch',
    url: `api/users/${user.id}`,
    data: { user }
  })
}

export const searchUsers = (query) => {
  return $.ajax({
    method: 'get',
    url: `api/users`,
    data: { query }
  })
}
