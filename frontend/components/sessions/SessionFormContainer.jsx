import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './SessionForm';
import { withRouter } from 'react-router-dom';

//passing in current state to the session form
let currentUser;

const mapStateToProps = (state, ownProps) => {
  currentUser = state.session.currentUser;
  const loggedIn = (state.session.currentUser) ? true : false;
  const formType = 'signup'
  const errors = state.errors;

  return ({
    loggedIn,
    formType,
    errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  })
};

export default withRouter(connect(mapStateToProps,
                        mapDispatchToProps)(SessionForm));
