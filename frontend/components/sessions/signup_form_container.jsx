import { connect } from 'react-redux';
import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const sessionsErrors = state.errors.sessionsErrors;

  return ({
    sessionsErrors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  })
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm));
