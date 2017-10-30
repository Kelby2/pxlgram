import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
  debugger
  const user = (ownProps.match.params.username)
  return ({
    user
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getUser: (user) => dispatch(getUser(user)),
  });
}

export default connect(mapStateToProps,
  mapDispatchToProps)
  (UserProfile);
