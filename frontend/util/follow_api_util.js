export const followUser = username => {
  return $.ajax({
    method: 'post',
    url: `api/users/${username}/follow`,
    data: { username }
  });
};

export const unfollowUser = username => {
  return $.ajax({
    method: 'delete',
    url: `api/users/${username}/unfollow`,
    data: { username }
  });
};
