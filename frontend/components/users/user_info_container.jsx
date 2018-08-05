import UserInfo from './user_info';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getUser } from '../../actions/user_actions';
import { followUser, unfollowUser } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  const { username } = ownProps;
  const user = state.entities.users[username] || state.session.currentUser;
  const isCurrentUser = username === state.session.currentUser.username;
  let currentUserFollows;
  if (user) {
    currentUserFollows = user.followers.includes(state.session.currentUser.username);
  }

  return ({
    user,
    isCurrentUser,
    currentUserFollows
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getUser: username => dispatch(getUser(username)),
    logout: () => dispatch(logout()),
    followUser: user => dispatch(followUser(user)),
    unfollowUser: user => dispatch(unfollowUser(user)),
  });
};

export default connect(mapStateToProps,
  mapDispatchToProps)(UserInfo);
