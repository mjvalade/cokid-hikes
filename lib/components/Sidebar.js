import React, { Component } from 'react';
import firebase from 'firebase';
import { map } from 'lodash';
import Favorites from './Favorites';

class Sidebar extends Component {

  // map through user's favorite trails and render those on page load, not all trails

//   var size = 3;
//   var items = list.slice(0, size).map(i => {
//     return <myview item={i} key={i.id} />
// }

  render() {
    const { trailsList } = this.props;

    let size = 5;

    const displayFavorites = trailsList.slice(0, size).map(trail => {
      return <Favorites key={trail.uid} {...trail}/>
    });
console.log(trailsList);
    return(
      <aside className="SideBar Aside Aside-1">
        <img src="../public/assets/mountains-icon.png" alt="landscape" className="MtnIcon" />
        <h2 className="SideTitle">Top 5 Hikes</h2>
        {displayFavorites.length ?
          displayFavorites : <p className="FavoritesError">Make some favorites</p>}
      </aside>
    )
  }
}

export default Sidebar;
