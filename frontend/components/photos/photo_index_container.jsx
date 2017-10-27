import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  debugger
  return ({
    photos: Object.keys(state.photos).map(id => state.photos[id])
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getPhotos: () => dispatch(getPhotos()),
  });
};

export default connect(mapStateToProps,
                        mapDispatchToProps) (PhotoIndex)
