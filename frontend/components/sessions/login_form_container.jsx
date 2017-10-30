import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors;
  return ({
    errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  })
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));
