import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  // const { user } = props;

  return(
    <header className="MainHeader">
      <Link to="/" className="header">
        <h1 className="MainTitle">CO Kid Hikes</h1>
      </Link>
      <input type="text" className="HeaderSearchInput" value="" placeholder="Search for trail"/>
      <input type="button" className="HeaderSearchButton" value="Search"/>
      <Link
        to="/NewTrail"
        className="NewIcon">
        NEW
      </Link>
      {/* NewTrail icon and route*/}
      {/* Login/out icon and route */}
    </header>
  )
}

export default Header;
