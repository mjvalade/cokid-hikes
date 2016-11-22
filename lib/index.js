import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import store from './store';
import * as actions from './actions/auth';

import { BrowserRouter, Match, Miss } from 'react-router';
import Header from './components/Header';
import App from './components/Application';
import NewTrailContainer from './containers/NewTrailContainer';
import TrailListContainer from './containers/TrailListContainer';
import TrailDetailContainer from './containers/TrailDetailContainer';

import NoMatch from './components/NoMatch';

require('./styles/style.scss');

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/NewTrail" component={NewTrailContainer} />
        <Match exactly pattern="/TrailList" component={TrailListContainer} />
        <Match pattern="/Trail/:title" component={TrailDetailContainer} />
        <Miss component={NoMatch} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('application')
);

store.dispatch(actions.startListeningToAuth());
