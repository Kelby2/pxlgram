import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from './sessions/session_form_container';
import PhotoIndexContainer from './photos/photo_index_container';

class LandingPage extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (this.props.loggedIn) ? <PhotoIndexContainer /> : <SessionFormContainer />
  }
}

export default LandingPage;
