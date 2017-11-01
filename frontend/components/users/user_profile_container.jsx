import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';
import { getUserPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  
  const user = Object.assign({}, state.entities.users[ownProps.match.params.id])
  const photos = Object.assign({}, state.entities.photos)
  return ({
    user,
    photos: Object.keys(state.entities.photos).map(id => state.entities.photos[id])
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
