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
  const users = state.entities.users
  return {
    photo,
    users,
    comments,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addComment: (comment) => dispatch(addComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    getPhoto: (id) => dispatch(getPhoto(id)),
    getPhotoComments: (photo_id) => dispatch(getPhotoComments(photo_id))
  })
}

export default connect(mapStateToProps,
                        mapDispatchToProps)(Comment)
