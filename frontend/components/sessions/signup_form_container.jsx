import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors;

  return ({
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm));
