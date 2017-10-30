import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state, ownProps) => {
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

  debugger
  return ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  })
};

export default withRouter(connect(mapStateToProps,
                        mapDispatchToProps)(SessionForm));
