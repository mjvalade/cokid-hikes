
import React, { Component } from 'react';
import firebase from '../firebase';
import Header from './Header';
import Dashboard from './Dashboard';
import NewTrail from './NewTrail';


class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      addContact: false
    };
  }

  render() {
    return(
      <div className="MainView">
        <Header />
        {/* alternate between pages */}
        <Dashboard />
        <NewTrail />
      </div>
    );
  }
}

module.exports = Application;
