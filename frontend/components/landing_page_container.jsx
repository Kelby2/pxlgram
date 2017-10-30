import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

export default withRouter(connect(mapStateToProps, null)(LandingPage));
