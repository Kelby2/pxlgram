import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import LandingPage from './landing_page';
import PhotoItem from './photos/photo_item';
import PhotoUploadContainer from './photos/photo_upload_container';
import UserContainer from './users/user_profile_container';
import UserEditContainer from './users/edit_user_container';
import PhotoGridContainer from './photos/photo_grid_container';

const App = () => (
  <div id='app'>
    <Switch>
      <ProtectedRoute exact path='/upload' component={ PhotoUploadContainer } />
      <ProtectedRoute exact path='/explore' component={ PhotoGridContainer } />
      <ProtectedRoute exact path='/:username/edit' component= { UserEditContainer } />
      <ProtectedRoute exact path='/:username' component={ UserContainer } />
      <ProtectedRoute path='/photos/:photoId' component={ PhotoItem } />
      <Route exact path='/' component={LandingPage} />
    </Switch>
  </div>
);

export default App;
