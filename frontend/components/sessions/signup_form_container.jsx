import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  const sessionsErrors = state.errors.sessionsErrors;

  return ({
    sessionsErrors
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    signup: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors)
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm));
