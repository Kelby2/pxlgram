import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './sessions/session_form';
import PhotoIndexContainer from './photos/photo_index_container';

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (this.props.loggedIn) ? <PhotoIndexContainer /> :
                                      <SessionForm />
  }
}

export default LandingPage;
