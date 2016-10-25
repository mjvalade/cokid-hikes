import React from 'react';
import { render } from 'react-dom';
import App from './components/Application.js';
import firebase from './firebase';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import trails from './reducers/trails-reducer';

require('./styles/style.scss');

let store = createStore(trails);

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('application'));
