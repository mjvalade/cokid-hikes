import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';

import SignIn from './SignIn';
import * as actions from '../actions/auth';

const Header = (props) => {

   const { auth, status } = props;

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
          to="/NewTrail"
          className="NewIcon"
          activeClassName="active"
        >
          ADD NEW
          {/* NewTrail icon*/}
        </Link>

        <Link
          to="/TrailList"
          className="ListIcon"
          activeClassName="active">
          TRAIL LIST
        </Link>
        <SignIn />
      </section>
      {/* Login/out icon? */}
    </header>
  )
}

export default Header;
