import * as FollowApiUtil from '../util/follow_api_util';

export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';

const startFollowing = following => {
  return ({
    type: FOLLOW_USER,
    following
  });
};

const endFollowing = user => {
  return ({
    type: UNFOLLOW_USER,
    user
  });
};

export const followUser = username => dispatch => {
  return FollowApiUtil.followUser(username)
    .then(following => {
      dispatch(startFollowing(following));
    });
};

export const unfollowUser = user => dispatch => {
  return dispatch(endFollowing(user));
};
