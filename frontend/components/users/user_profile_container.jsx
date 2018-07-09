import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getUser } from '../../actions/user_actions';
import { getUserPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.username];
  const photos = Object.values(state.entities.photos)
    .filter(photo => photo.author_name === ownProps.match.params.username)
    .sort((photo1, photo2) => photo2.created_at.localeCompare(photo1.created_at));

  return ({
    user,
    currentUser: state.session.currentUser,
    photos: Object.keys(photos).map(
      id => photos[id])
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getUser: (username) => dispatch(getUser(username)),
    getUserPhotos: (username) => dispatch(getUserPhotos(username)),
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps,
  mapDispatchToProps)
  (UserProfile);
