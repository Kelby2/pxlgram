import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import HeaderContainer from './header_container';
import PhotoIndexContainer from './photos/photo_index_container';
import LandingPageContainer from './landing_page_container';

const App = () => (
  <div className='appDiv'>
    <header className='header'>
      <HeaderContainer />
      <Route path='/' component={LandingPageContainer} />
      {/*
        <AuthRoute path='/' component={SessionFormContainer} />
        <Route path='/' component={PhotoIndexContainer} />
      */}
    </header>
  </div>
);

export default App;
