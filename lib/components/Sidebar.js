import React, { Component } from 'react';
import firebase from 'firebase';
import { map } from 'lodash';
import Favorites from './Favorites';

class Sidebar extends Component {

  render() {
    const { trailsList } = this.props;

    const displayFavorites = map(this.props.auth.favorites, (trailUid) => {
      let trailData = trailsList.find(trail => (trail.uid === trailUid));
      return <Favorites key={trailUid} {...trailData}/>
    });
    return(
      <aside className="SideBar Aside Aside-1">
        <img src="../assets/mountains-icon.png" alt="landscape" className="MtnIcon" />
        <h2 className="SideTitle">Favorite Hikes</h2>
        {displayFavorites.length ?
          displayFavorites : <p className="FavoritesError">Login to make favorites</p>}
      </aside>
    )
  }
}

export default Sidebar;
