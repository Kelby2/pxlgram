import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addPhoto } from '../../actions/photo_actions';
import PhotoUploadForm from './photo_upload_form';

const mapStateToProps = (state) => {
  return ({

  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addPhoto: (photo) => dispatch(addPhoto(photo))
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoUploadForm))
