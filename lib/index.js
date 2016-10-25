import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from './firebase';
import { BrowserRouter, Match, Miss } from 'react-router';
// import Root from './routes';
import trails from './reducers/trails-reducer';
import App from './components/Application';
import Home from './components/Dashboard';
import NewTrailContainer from './containers/NewTrailContainer';
import TrailList from './components/TrailList';
import NoMatch from './components/NoMatch';
import Header from './components/Header';

// require("!style!css!sass!./styles/style.scss");
require('./styles/style.scss');

const store = createStore(trails, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    {/* <Root /> */}
    <BrowserRouter basename="/public">
      <div>
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/NewTrail" component={NewTrailContainer} />
        <Match exactly pattern="/TrailList" component={TrailList} />
        <Miss component={NoMatch} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('application')
);
