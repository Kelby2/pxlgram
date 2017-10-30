import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LandingPage from './landing_page.jsx';


const mapStateToProps = (state, ownProps) => {
  const loggedIn = (state.session.curentUser) ? true: false;
  const errors = state.errors;

  return ({
    loggedIn,
    errors
  })
}

export default withRouter(connect(mapStateToProps, null)(LandingPage));
