import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { getUser } from '../../actions/user_actions';
import { getUserPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id]
  const photos = Object.values(state.entities.photos).filter((photo) => {
    return (photo.author_id === parseInt(ownProps.match.params.id))
  })
  return ({
    user,
    currentUser: state.session.currentUser,
    photos: Object.keys(photos).map(
      id => photos[id])
      .reverse()
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getUser: (userId) => dispatch(getUser(userId)),
    getUserPhotos: (userId) => dispatch(getUserPhotos(userId)),
    logout: () => dispatch(logout())
  });
}

export default connect(mapStateToProps,
  mapDispatchToProps)
  (UserProfile);
