import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addPhoto } from '../../actions/photo_actions';
import PhotoUploadForm from './photo_upload_form';

const mapStateToProps = (state) => {
  const errors = state.errors;

  return ({
    errors
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addPhoto: photo => dispatch(addPhoto(photo))
    clearErrors: () => dispatch(clearErrors())
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoUploadForm))
