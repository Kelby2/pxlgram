import { connect } from 'react-redux';
import { getPhotosPage, resetPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const mapStateToProps = state => {
  const photos = Object.keys(state.entities.photos)
  .map(id => state.entities.photos[id])
  .sort((photo1, photo2) => photo2.created_at.localeCompare(photo1.created_at));

  return ({
    photos,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    resetPhotos: () => dispatch(resetPhotos()),
    getPhotosPage: page => dispatch(getPhotosPage(page)),
  });
};

export default connect(mapStateToProps,
                        mapDispatchToProps)(PhotoIndex);
