import React, { Component } from 'react';
import firebase from 'firebase';
import { map } from 'lodash';
import Favorites from './Favorites';

class Sidebar extends Component {

  render() {
    const { trailsList } = this.props;

    let size = 5;
    const displayFavorites = trailsList.slice(0, size).map(trail => {
      return <Favorites key={trail.uid} {...trail}/>
    });
// console.log(trailsList);
    return(
      <aside className="SideBar Aside Aside-1">
        <img src="../public/assets/mountains-icon.png" alt="landscape" className="MtnIcon" />
        <h2 className="SideTitle">Top 5 Hikes</h2>
        {displayFavorites.length ?
          displayFavorites : <p className="FavoritesError">Loading trails</p>}
      </aside>
    )
  }
}

export default Sidebar;
