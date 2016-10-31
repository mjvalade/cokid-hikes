import React, { Component } from 'react';
import firebase from 'firebase';
// import { map } from 'lodash';
import TrailCard from './TrailCard';
// import { fetchAllTrails } from '../actions/index';

class TrailList extends Component {

  getTrails() {
    this.props.fetchAllTrails();
  }

  componentDidMount() {
    this.getTrails();
    console.log(this.state);
    console.log(this.getTrails());
    // fetchAllTrails();
    // console.log(fetchAllTrails);
    // console.log('fetchedTrails', trails);

  }

  render() {
      return(
        <div className="TrailList">
          {/* <TrailCard /> */}
        </div>
      )
  }
};

export default TrailList;
