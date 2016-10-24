import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/Application';
import Home from './components/Dashboard';
import NewTrail from './components/NewTrail';
import TrailList from './components/TrailList';


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/NewTrail" component={NewTrail}/>
      <Route path="/TrailList" component={TrailList}/>
    </Route>
  </Router>
);

export default Routes;
