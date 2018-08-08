import React from 'react';
import { connect } from 'react-redux';
import SessionEntryPage from './sessions/session_entry_page';
import HomePage from './home_page';

const LandingPage = props => {
  return props.loggedIn ? <HomePage /> : <SessionEntryPage />;
};

const mapStateToProps = state => {
  const loggedIn = state.session.currentUser ? true : false;
  return { loggedIn };
};

export default connect(
  mapStateToProps, null)(LandingPage);
