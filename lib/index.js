import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from './firebase';

import Root from './routes';

import trails from './reducers/trails-reducer';

require('./styles/style.scss');

const store = createStore(trails, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('application')
);
