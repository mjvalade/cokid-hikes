import React, { Component } from 'react';

export default class Sidebar extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <aside className="SideBar">
        <img src="../public/assets/mountains-icon.png" alt="landscape" className="MtnIcon" />
        <h2 className="SideTitle">Favorite Hikes</h2>
        {/* favorites list */}
        <p className="FavoriteTitle">trailData.title</p>
      </aside>
    )
  }
}
