import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { getUserPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  const { username } = ownProps.match.params;
  
  const photos = Object.values(state.entities.photos)
    .filter(photo => photo.author_name === username)
    .sort((photo1, photo2) => photo2.created_at.localeCompare(photo1.created_at));

  return ({
    username,
    photos: Object.keys(photos).map(id => photos[id])
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getUserPhotos: username => dispatch(getUserPhotos(username)),
  });
};

export default connect(mapStateToProps,
  mapDispatchToProps)
  (UserProfile);
