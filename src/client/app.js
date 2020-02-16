import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './theme.scss';

import SearchContainer from './containers/search';

export default () => (
  <div className="container-fluid">
    <Router>
      <Switch>
        <Route path="/">
          <SearchContainer />
        </Route>
      </Switch>
    </Router>
  </div>
);
