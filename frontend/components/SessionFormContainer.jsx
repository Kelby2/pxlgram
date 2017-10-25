import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';
import SessionForm from './SessionForm';

//passing in current state to the session form
const mapStateToProps = (state, ownProps) => {
  const loggedIn = (state.session.currentUser) ? true : false;
  const formType =
  (ownProps.location.pathname === "/signup") ? "login" : "signup"
  const errors = state.errors;

  return ({
    loggedIn,
    formType,
    errors
  });
};

const mapDispatchToProps = (dispatch) => {
  const action =
  (ownProps.location.pathname === "/signup") ? login : signup

  return ({
    processForm: user => dispatch(action(user)),
  })
};

export default connect(mapStateToProps,
                        mapDispatchToProps)(SessionForm);
