
import React, { Component } from 'react';
import firebase from '../firebase';


class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      addContact: false
    };
  }
}

module.exports = Application;
