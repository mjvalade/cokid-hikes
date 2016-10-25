import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/Application';
import Home from './components/Dashboard';
import NewTrail from './container/NewTrailContainer';
import TrailList from './components/TrailList';
import NoMatch from './components/NoMatch';


const Root = () => {
  return (
    <BrowserRouter history={ history }>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/NewTrail" component={NewTrailContainer} />
        <Match exactly pattern="/TrailList" component={TrailList} />
        <Miss component={NoMatch} />
      </div>
    </BrowserRouter>
  )
};

export default Root;
