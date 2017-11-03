import { connect } from 'react-redux';
import { addComment,
        deleteComment,
        getPhotoComments,
        getPhoto } from '../../actions/photo_actions';
import { getComments } from '../../actions/comment_actions'
import Comment from './comment_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.photo_id]
  const comments = Object.values(state.entities.comments).filter((comment) => {
    return (comment.photo_id === parseInt(ownProps.photo_id))
  })
  return {
    photo,
    comments,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addComment: (id) => dispatch(addComment(id)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    getPhoto: (id) => dispatch(getPhoto(id)),
    getPhotoComments: (photo_id) => dispatch(getPhotoComments(photo_id))
  })
}

export default connect(mapStateToProps,
                        mapDispatchToProps)(Comment)
