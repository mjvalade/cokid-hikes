import React, { Component } from 'react';
import firebase from 'firebase';
import { map } from 'lodash';
import Favorites from './Favorites';

class Sidebar extends Component {

  // map through user's favorite trails and render those on page load, not all trails

  render() {
    const displayFavorites = map(this.props.auth.favorites, (trail) => {
      return <Favorites key={trail.uid} {...trail}/>
    });
console.log('favorites', this.props.auth.favorites);
    return(
      <aside className="SideBar Aside Aside-1">
        <img src="../public/assets/mountains-icon.png" alt="landscape" className="MtnIcon" />
        <h2 className="SideTitle">Favorite Hikes</h2>
        {displayFavorites.length ? displayFavorites : "Make some favorites"}
      </aside>
    )
  }
}

export default Sidebar;
