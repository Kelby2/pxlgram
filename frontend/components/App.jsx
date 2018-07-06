import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import HeaderContainer from './header/header_container';
import LandingPage from './landing_page';
import PhotoUploadContainer from './photos/photo_upload_container';
import UserContainer from './users/user_profile_container';
import UserEditContainer from './users/edit_user_container';
import PhotoGridContainer from './photos/photo_grid_container';
import PhotoModalContainer from './photos/photo_modal_container';

const App = () => (
  <div className='appDiv'>
    <ProtectedRoute path='/' component={ HeaderContainer }/>
    <header className='header'>
      <Switch>
        <ProtectedRoute exact path='/upload' component={ PhotoUploadContainer } />
        <ProtectedRoute exact path='/explore' component={ PhotoGridContainer } />
        <ProtectedRoute path='/photos/:photoId' component={ PhotoModalContainer } />
        <ProtectedRoute exact path='/:username/edit' component= { UserEditContainer } />
        <ProtectedRoute exact path='/:username' component={ UserContainer } />
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </header>
  </div>
);

export default App;
