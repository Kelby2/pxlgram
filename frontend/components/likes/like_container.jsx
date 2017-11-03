import { connect } from 'react-redux';
import { addLike, deleteLike, getPhoto } from '../../actions/photo_actions';
import Like from './like';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.id]
  return {
    photo,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addLike: (id) => dispatch(addLike(id)),
    deleteLike: () => dispatch(deleteLike()),
    getPhoto: (id) => dispatch(getPhoto(id))
  })
}

export default connect(mapStateToProps,
                        mapDispatchToProps)(Like)
