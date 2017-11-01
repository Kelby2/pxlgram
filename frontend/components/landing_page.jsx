import React from 'react';
import { Link } from 'react-router-dom';
import SessionPage from './sessions/session_entry_page';
import PhotoIndexContainer from './photos/photo_index_container';

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (this.props.loggedIn) ? <PhotoIndexContainer /> :
                      <SessionPage clearErrors={ this.props.clearErrors }/>
  }
}

export default LandingPage;
