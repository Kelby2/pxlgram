import {
  RECEIVE_USER,
  UPDATE_USER,
  RECEIVE_USER_SUGGESTIONS } from '../../actions/user_actions';
import { FOLLOW_USER, UNFOLLOW_USER } from '../../actions/follow_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {

    case RECEIVE_USER:
      newState = {...oldState, [action.user.username]: action.user };
      return newState;
    case RECEIVE_USER_SUGGESTIONS:
      newState = {...oldState };
      Object.keys(action.users).forEach(username => {
        let existingUser = newState[username] || {};
        existingUser.followers = existingUser.followers || [];
        newState[username] = Object.assign(
          {},
          existingUser,
          action.users[username]);
      });
      return newState;
    case UPDATE_USER:
      const prevUsername = Object.keys(oldState).find(name =>
        oldState[name].id === action.user.id);
      const changedUsername = prevUsername !== action.user.username;
      newState = {...oldState, [action.user.username]: action.user };
      if (changedUsername) { delete newState[prevUsername]; }
      return newState;
    case FOLLOW_USER:
      const { follower, followee } = action.following;
      newState = {...oldState };
      newState[followee].followers = oldState[followee].followers || [];
      newState[followee].followers.push(follower);
      return newState;
    case UNFOLLOW_USER:
      newState = {...oldState };
      newState[action.following.followee].followers =
      newState[action.following.followee].followers.filter(follower => (
        follower !== action.following.follower
      ));

      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;
