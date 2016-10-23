import React from 'react';
import { render } from 'react-dom';
import App from './components/Application.js';
import firebase from './firebase';

require('./styles/style.scss');

render(<App />, document.getElementById('application'));
