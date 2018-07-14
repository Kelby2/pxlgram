import EditUser from './edit_user';
import { connect } from 'react-redux';
import { editUser, clearUserErrors } from '../../actions/user_actions';

const mapStateToProps = state => {
  const user = state.session.currentUser;
  const userErrors = state.errors.usersErrors;

  return ({
    user,
    userErrors
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    editUser: user => dispatch(editUser(user)),
    clearUserErrors: () => dispatch(clearUserErrors())
  });
};

export default connect(mapStateToProps,
  mapDispatchToProps)
  (EditUser);
