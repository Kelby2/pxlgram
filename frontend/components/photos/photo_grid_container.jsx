import { connect } from 'react-redux';
import { getPhotosGrid } from '../../actions/photo_actions';
import PhotoGrid from './photo_grid';

const mapStateToProps = state => {
  const photos = Object.keys(state.entities.photos)
  .map(id => state.entities.photos[id]).reverse();

  return ({
    photos
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getPhotosGrid: pageNumber => dispatch(getPhotosGrid(pageNumber)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
