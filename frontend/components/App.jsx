import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import HeaderContainer from './header/header_container';
import PhotoIndexContainer from './photos/photo_index_container';
import LandingPageContainer from './landing_page_container';
import PhotoUploadContainer from './photos/photo_upload_container';
import UserContainer from './users/user_profile_container';
import UserEditContainer from './users/edit_user_container';

const App = () => (
  <div className='appDiv'>
    <header className='header'>
      <HeaderContainer />
      <Switch>
        <ProtectedRoute exact path='/upload' component={ PhotoUploadContainer } />
        <ProtectedRoute exact path ='/:username/edit' component= { UserEditContainer } />
        <ProtectedRoute path='/:username' component={ UserContainer } />
        <Route path='/' component={LandingPageContainer} />
      </Switch>
    </header>
  </div>
);

export default App;
