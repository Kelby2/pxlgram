import { connect } from 'react-redux';
import { getPhotosPage } from '../../actions/photo_actions';
import { getUsers } from '../../actions/user_actions';
import PhotoIndex from './photo_index';

const mapStateToProps = state => {
  const users = state.entities.users
  const photos = Object.keys(state.entities.photos)
  .map(id => state.entities.photos[id]).reverse()

  return ({
    photos,
    users,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getPhotosPage: (page) => dispatch(getPhotosPage(page)),
    getUsers: () => dispatch(getUsers()),
  });
};

export default connect(mapStateToProps,
                        mapDispatchToProps)(PhotoIndex);
