import React, { Component } from 'react';
import firebase from '../firebase';
import Header from './Header';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      addContact: false
    };
  }

  // where to add in "breadcrumbs" navigation?

  render() {
    return(
      <div className="MainView">
        <div className="DashboardView">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    );
  }
}

module.exports = App;
