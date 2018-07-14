export const searchUsers = query => {
  return $.ajax({
    method: 'get',
    url: `api/users/search`,
    data: { query }
  });
};

export const getUser = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${id}`,
  });
};

export const editUser = user => {
  return $.ajax({
    method: 'patch',
    url: `api/users/${user.id}`,
    dataType: 'json',
    contentType: false,
    processData: false,
    data: user,
  });
};
