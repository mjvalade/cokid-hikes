import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <header className="MainHeader">
        <h1 className="MainTitle">CO Kid Hikes</h1>
        <input type="text" className="HeaderSearchInput" value="" placeholder="Search for trail"/>
        <input type="button" className="HeaderSearchButton" value="Search"/>
        {/* NewTrail icon and route*/}
        {/* Login/out icon and route */}
      </header>
    )
  }
}
