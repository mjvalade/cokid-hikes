import React, { Component } from 'react';
import firebase from 'firebase';
import { map } from 'lodash';
import TrailCard from './TrailCard';

class TrailList extends Component {

  render() {
    const { trailsList } = this.props;

    const displayTrails = map(trailsList, (trail) => {return <TrailCard key={trail.uid} {...trail} setSelectedTrail={this.props.setSelectedTrail}/>});

    return(
      <div className="TrailList">
        {displayTrails.length ? displayTrails : "Make some trails"}
      </div>
    )
  }
};

export default TrailList;
