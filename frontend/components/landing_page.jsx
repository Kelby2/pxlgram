import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionEntryPage from './sessions/session_entry_page';
import PhotoIndexContainer from './photos/photo_index_container';

const LandingPage = props => {
  return props.loggedIn ? <PhotoIndexContainer /> : <SessionEntryPage />;
};

const mapStateToProps = state => {
  const loggedIn = state.session.currentUser ? true : false;
  return { loggedIn };
};

export default withRouter(connect(
  mapStateToProps, null)(LandingPage));
