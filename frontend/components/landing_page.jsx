import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionEntryPage from './sessions/session_entry_page';
import PhotoIndexContainer from './photos/photo_index_container';
import { clearSessionErrors } from '../actions/session_actions';

const LandingPage = props => {
  if (props.loggedIn) {
    return <PhotoIndexContainer />;
  }

  return (
    <SessionEntryPage clearSessionErrors={ props.clearSessionErrors } />
  );
};

const mapStateToProps = state => {
  const loggedIn = state.session.curentUser ? true : false;
  return { loggedIn };
};

const mapDispatchToProps = dispatch => {
  return ({
    clearSessionErrors: () => dispatch(clearSessionErrors),
  });
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps)(LandingPage));
