import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import SessionFormContainer from './sessions/SessionFormContainer';
import HeaderContainer from './header_container';
import PhotoIndexContainer from './photos/photo_index_container';

const App = () => (
  <div className='appDiv'>
    <header className='header'>
      <HeaderContainer />
      {/* <PhotoIndexContainer /> */}
    </header>

    <AuthRoute path='/' component={SessionFormContainer} />
  </div>
);

export default App;
