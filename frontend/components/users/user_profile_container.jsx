import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';
import { getUserPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id]
  const photos = state.entities.photos
  return ({
    user,
    photos
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getUser: (userId) => dispatch(getUser(userId)),
    getUserPhotos: (userId) => dispatch(getUserPhotos(userId))
  });
}

export default connect(mapStateToProps,
  mapDispatchToProps)
  (UserProfile);
