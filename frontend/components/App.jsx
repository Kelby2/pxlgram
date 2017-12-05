import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import HeaderContainer from './header/header_container';
import PhotoIndexContainer from './photos/photo_index_container';
import LandingPageContainer from './landing_page_container';
import PhotoUploadContainer from './photos/photo_upload_container';
import UserContainer from './users/user_profile_container';
import UserEditContainer from './users/edit_user_container';
import PhotoGridContainer from './photos/photo_grid_container';

const App = () => (
  <div className='appDiv'>
    <ProtectedRoute path='/' component={ HeaderContainer }/>
    <header className='header'>
      <Switch>
        <ProtectedRoute exact path='/upload' component={ PhotoUploadContainer } />
        <ProtectedRoute exact path='/explore' component={ PhotoGridContainer } />
        <ProtectedRoute exact path='/:username/edit' component= { UserEditContainer } />
        <ProtectedRoute path='/:username' component={ UserContainer } />
        <Route path='/' component={LandingPageContainer} />
      </Switch>
    </header>
  </div>
);

export default App;
