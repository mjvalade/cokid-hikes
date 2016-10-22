import React, { Component } from 'react';
import firebase from '../firebase';
import Header from './Header';
import Dashboard from './Dashboard';
import NewTrail from './NewTrail';
import TrailList from './TrailList';


class App extends React.Component {
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
        <TrailList />
      </div>
    );
  }
}

module.exports = App;
