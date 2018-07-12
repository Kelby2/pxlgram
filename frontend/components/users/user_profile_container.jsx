import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getUser } from '../../actions/user_actions';
import { getUserPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  const { username } = ownProps.match.params;

  const user = state.entities.users[username];
  const photos = Object.values(state.entities.photos)
    .filter(photo => photo.author_name === username)
    .sort((photo1, photo2) => photo2.created_at.localeCompare(photo1.created_at));

  const isCurrentUser = username === state.session.currentUser.username;

  return ({
    user,
    isCurrentUser,
    photos: Object.keys(photos).map(id => photos[id])
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getUser: username => dispatch(getUser(username)),
    getUserPhotos: username => dispatch(getUserPhotos(username)),
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps,
  mapDispatchToProps)
  (UserProfile);
