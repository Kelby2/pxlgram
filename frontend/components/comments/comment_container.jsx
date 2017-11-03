import { connect } from 'react-redux';
import { addComment, deleteComment, getPhoto } from '../../actions/photo_actions';
import Comment from './comment';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.photo_id]
  return {
    photo,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addComment: (id) => dispatch(addComment(id)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    getPhoto: (id) => dispatch(getPhoto(id))
  })
}

export default connect(mapStateToProps,
                        mapDispatchToProps)(Comment)
