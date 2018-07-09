import { connect } from 'react-redux';
import { addComment, getPhotocomments } from '../../actions/comment_actions';
import { getPhoto } from '../../actions/photo_actions';
import PhotoModal from './photo_modal.jsx';

const mapStateToProps = (state, ownProps) => {

  const photo = state.entities.photos[ownProps.match.params.photoId];
  
  return {
    photo
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    addComment: (comment) => dispatch(addComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    getPhoto: (id) => dispatch(getPhoto(id)),
    getPhotoComments: (photo_id) => dispatch(getPhotoComments(photo_id))
  });
};

export default connect(mapStateToProps,
                        mapDispatchToProps)(PhotoModal);
