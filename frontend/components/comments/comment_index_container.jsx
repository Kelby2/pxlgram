import { connect } from 'react-redux';
import { addComment, deleteComment, getPhotoComments } from '../../actions/comment_actions'
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.photoId]
  
  const comments = Object.values(state.entities.comments).filter((comment) => {
    return (comment.photo_id === parseInt(ownProps.photoId))
  })
  return {
    photo,
    comments,
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addComment: (comment) => dispatch(addComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    getPhotoComments: (photo_id) => dispatch(getPhotoComments(photo_id))
  })
}

export default connect(mapStateToProps,
                        mapDispatchToProps)(CommentIndex)
