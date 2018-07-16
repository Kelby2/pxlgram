import UserInfo from './user_info';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getUser } from '../../actions/user_actions';
import { followUser } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  const { username } = ownProps;
  const user = state.entities.users[username];
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
    followUser: user => dispatch(followUser(user)),
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps,
  mapDispatchToProps)(UserInfo);
