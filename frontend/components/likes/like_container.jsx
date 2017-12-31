import { connect } from 'react-redux';
import { addLike, deleteLike } from '../../actions/like_actions';
import Like from './like';

const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.photo_id]
  return {
    photo,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    addLike: id => dispatch(addLike(id)),
    deleteLike: id => dispatch(deleteLike(id)),
  })
}

export default connect(mapStateToProps,
                        mapDispatchToProps)(Like)
