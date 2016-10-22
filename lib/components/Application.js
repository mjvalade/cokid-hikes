
import React, { Component } from 'react';
import firebase from '../firebase';
import Header from './Header';
import Sidebar from './Sidebar';


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
        <Sidebar />
      </div>
    );
  }
}

module.exports = Application;
