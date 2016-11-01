import React, { Component } from 'react';
import firebase from 'firebase';
import { map } from 'lodash';
import Favorites from './Favorites';

class Sidebar extends Component {

  render() {
    const displayFavorites = map(this.props.trailsList, (trail) => {return <Favorites key={trail.uid} {...trail}/>});

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
