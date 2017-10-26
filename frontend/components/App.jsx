import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import SessionFormContainer from './sessions/SessionFormContainer';
import GreetingContainer from './GreetingContainer';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>

    <AuthRoute path='/' component={SessionFormContainer} />
  </div>
);

export default App;
