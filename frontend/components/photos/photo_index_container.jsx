import { connect } from 'react-redux';
import { getPhotos, clearAllPhotos } from '../../actions/photo_actions';
import { getUsers, clearAllUsers } from '../../actions/user_actions';
import PhotoIndex from './photo_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return ({
    photos: Object.keys(state.entities.photos)
    .map(id => state.entities.photos[id]),
    users: Object.keys(state.entities.users)
    .map(id => state.entities.users[id])
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getPhotos: () => dispatch(getPhotos()),
    getUsers: () => dispatch(getUsers()),
    clearAllUsers: () => dispatch(clearAllUsers()),
    clearAllPhotos: () => dispatch(clearAllPhotos())
  });
};

export default connect(mapStateToProps,
                        mapDispatchToProps) (PhotoIndex)
