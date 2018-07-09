import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addPhoto, clearPhotoErrors } from '../../actions/photo_actions';
import PhotoUploadForm from './photo_upload_form';

const mapStateToProps = (state) => {
  const photoErrors = state.errors.photosErrors;

  return ({
    photoErrors
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    addPhoto: photo => dispatch(addPhoto(photo)),
    clearPhotoErrors: () => dispatch(clearPhotoErrors())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoUploadForm));
