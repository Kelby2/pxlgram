import { connect } from 'react-redux';
import { addLike, deleteLike } from '../../actions/like_actions';
import Like from './like';

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return ({
    addLike: (id) => dispatch(addLike(id)),
    deleteLike: () => dispatch(deleteLike())
  })
}

export default connect(mapStateToProps,
                        mapDispatchToProps)(Like)
