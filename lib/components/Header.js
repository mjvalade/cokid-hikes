import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firebase from 'firebase';

import SignIn from './SignIn';
import * as actions from '../actions/auth';


class Header extends Component {

  render() {
    console.log(this.props.status);
    return(
      <header className="MainHeader">
        <h1 className="MainTitle">
          <Link
            to="/"
            className="MainTitle"
          >
            CO Kid Hikes
          </Link>
        </h1>
        <section className="HeaderLinks">
          <Link
            to="/TrailList"
            className="ListIcon"
          >
            TRAIL LIST
          </Link>
          <SignIn />
        </section>
      </header>
    )
  }
}

const mapStateToProps = (state) => state.auth;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
