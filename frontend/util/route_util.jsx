import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';


const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

//redirects to landing page if you are already logged in

const Auth = ({component: Component, path, loggedIn}) => {
  return (
    <Route path={path} render={(props) => (
      loggedIn ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    )}/>
  );
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
