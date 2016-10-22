import React from 'react';
import { render } from 'react-dom';
import App from './components/Application.js';

require('./styles/style.scss');

render(<App />, document.getElementById('application'));
