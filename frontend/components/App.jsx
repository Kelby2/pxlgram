import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './sessions/SessionFormContainer';

const App = () => (
  <div>
    <header>
      <h3>pxlgram beta</h3>
    </header>

    <Route path='/login' component={SessionFormContainer} />
    <Route path='/signup' component={SessionFormContainer} />
  </div>
);

export default App;