import { connect } from 'react-redux';
import { getPhotosGrid, resetPhotos } from '../../actions/photo_actions';
import PhotoGrid from './photo_grid';

const mapStateToProps = state => {
  const photos = Object.keys(state.entities.photos)
  .map(id => state.entities.photos[id])
  .sort((photo1, photo2) => photo2.created_at.localeCompare(photo1.created_at));

  return ({
    photos
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    resetPhotos: () => dispatch(resetPhotos()),
    getPhotosGrid: pageNumber => dispatch(getPhotosGrid(pageNumber)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
