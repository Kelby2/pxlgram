import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return ({
    photos: Object.keys(state.entities.photos)
    .map(id => state.entities.photos[id])
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getPhotos: () => dispatch(getPhotos()),
  });
};

export default connect(mapStateToProps,
                        mapDispatchToProps) (PhotoIndex)
