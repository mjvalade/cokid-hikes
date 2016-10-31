import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';

import SignIn from './SignIn';
import * as actions from '../actions/auth';

const Header = (props) => {

   const { auth } = props;

  return(
    <header className="MainHeader">
      <h1 className="MainTitle">
        <Link
          to="/"
          className="MainTitle">
          CO Kid Hikes
        </Link>
      </h1>
      {/* <input
        type="text"
        className="HeaderSearchInput"
        value=""
        placeholder="Search for trail"
      />
      <input
        type="button"
        className="HeaderSearchButton"
        value="Search"
      /> */}
      <Link
        to="/NewTrail"
        className="NewIcon"
        activeClassName="active"
        // hidden={(auth.status !== 'LOGGED_IN')}
      >
        NEW
        {/* NewTrail icon*/}
      </Link>

      <Link
        to="/TrailList"
        className="ListIcon"
        activeClassName="active">
        TRAIL LIST
      </Link>
      <SignIn />
      {/* Login/out icon? */}
    </header>
  )
}

export default Header;
