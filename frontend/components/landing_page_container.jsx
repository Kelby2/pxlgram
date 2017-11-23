import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../actions/session_actions'
import LandingPage from './landing_page.jsx';


const mapStateToProps = (state, ownProps) => {
  let loggedIn;
  if (state.session.currentUser) {
    loggedIn = true;
  } else {
    loggedIn = false;
  };
  return ({
    loggedIn
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    clearErrors: () => dispatch(clearErrors())
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)
                            (LandingPage));
