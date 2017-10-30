import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {

  const user = state.entities.users[ownProps.match.params.id]
  return ({
    user
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getUser: (userId) => dispatch(getUser(userId)),
  });
}

export default connect(mapStateToProps,
  mapDispatchToProps)
  (UserProfile);
