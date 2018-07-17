import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { UPDATE_USER } from '../../actions/user_actions';
import { FOLLOW_USER, UNFOLLOW_USER } from '../../actions/follow_actions';

const SessionReducer = (oldState = { currentUser: null }, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = {...oldState, currentUser: action.user};
      return newState;
    case UPDATE_USER:
      newState = {...oldState, currentUser: action.user};
      return newState;
    case FOLLOW_USER:
      newState = {...oldState};
      newState.currentUser.followings.push(action.following.followee);
      return newState;
    case UNFOLLOW_USER:
      newState = {...oldState};
      newState.currentUser.followings =
      newState.currentUser.followings.filter(followee => (
        followee !== action.following.followee
      ));
      
      return newState;
    default:
      return oldState;
  }
};

export default SessionReducer;
