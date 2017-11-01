import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import HeaderContainer from './header_container';
import PhotoIndexContainer from './photos/photo_index_container';
import LandingPageContainer from './landing_page_container';
import UserContainer from './users/user_profile_container';

const App = () => (
  <div className='appDiv'>
    <header className='header'>

      {/*
        <AuthRoute path='/' component={SessionFormContainer} />
        <Route path='/' component={PhotoIndexContainer} />
      */}
      <HeaderContainer />
      <Switch>

        <Route exact path='/users/:id' component={ UserContainer } />
        <Route path='/' component={LandingPageContainer} />
      </Switch>
    </header>
  </div>
);

export default App;
