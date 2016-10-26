import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import store from './store';
// import trails from './reducers/trails-reducer';

import { BrowserRouter, Match, Miss } from 'react-router';
import Header from './components/Header';
import App from './components/Application';
import NewTrailContainer from './containers/NewTrailContainer';
import TrailList from './components/TrailList';
import NoMatch from './components/NoMatch';

// require("!style!css!sass!./styles/style.scss");
require('./styles/style.scss');

// const store = createStore(trails, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <BrowserRouter basename="/public">
      <div>
        <Header />
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/NewTrail" component={NewTrailContainer} />
        <Match exactly pattern="/TrailList" component={TrailList} />
        <Miss component={NoMatch} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('application')
);

store.dispatch(actions.startListeningToAuth());
