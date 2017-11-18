import EditUser from './edit_user';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.username]
  return ({
    user,
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getUser: (username) => dispatch(getUser(username)),
  });
}

export default connect(mapStateToProps,
  mapDispatchToProps)
  (EditUser);
