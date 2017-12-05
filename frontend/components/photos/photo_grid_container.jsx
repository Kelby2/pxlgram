import connect from 'react-redux';
import { getPhotosByPage } from '../../actions/photo_actions';
import PhotoGrid from './photo_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  const photos = Object.keys(state.entities.photos)
  .map(id => state.entities.photos[id]).reverse()

  return ({
    photos
  })
}

const mapDispatchToProps => dispatch => {
  return ({
    getPhotos: () => dispatch(getPhotos()),
  });
};

export default connect(mapStateToProps,
                        mapDispatchToProps)(PhotoGrid);
