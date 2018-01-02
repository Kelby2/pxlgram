import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearSessionErrors } from '../actions/session_actions'
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
    clearSessionErrors: () => dispatch(clearSessionErrors())
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)
                            (LandingPage));
