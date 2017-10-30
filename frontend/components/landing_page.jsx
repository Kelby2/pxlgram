import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexContainer from './photos/photo_index_container'
import SessionFormContainer from './sessions/session_form_container'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    debugger
    return (this.props.loggedIn) ? <PhotoIndexContainer /> :
                                      <SessionFormContainer />
  }
}

export default LandingPage;
