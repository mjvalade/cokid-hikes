import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  // const { user } = props;

  return(
    <header className="MainHeader">
      <h1 className="MainTitle">
        <Link
          to="/"
          className="header">
          CO Kid Hikes
        </Link>
      </h1>
      <input type="text" className="HeaderSearchInput" value="" placeholder="Search for trail"/>
      <input type="button" className="HeaderSearchButton" value="Search"/>
      <Link
        to="/NewTrail"
        className="NewIcon"
        activeClassName="active">
        NEW
      </Link>

      <Link
        to="/TrailList"
        className="ListIcon"
        activeClassName="active">
        TRAIL LIST
      </Link>

      {/* NewTrail icon and route*/}
      {/* Login/out icon and route */}
    </header>
  )
}

export default Header;
