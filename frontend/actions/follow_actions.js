import * as FollowApiUtil from '../util/follow_api_util';

export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';

const startFollowing = following => {
  return ({
    type: FOLLOW_USER,
    following
  });
};

const endFollowing = following => {
  return ({
    type: UNFOLLOW_USER,
    following
  });
};

export const followUser = username => dispatch => {
  return FollowApiUtil.followUser(username)
    .then(following => {
      dispatch(startFollowing(following));
    });
};

export const unfollowUser = username => dispatch => {
  return FollowApiUtil.unfollowUser(username)
    .then(following => {
      dispatch(endFollowing(following));
    });
};
