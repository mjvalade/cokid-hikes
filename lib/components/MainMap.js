import React, { Component } from 'react';
import { map } from 'lodash';
import Favorites from './Favorites';


const GOLDEN_LATLONG = {
  lat: 39.754185,
  lng: -105.230484
};

class MainMap extends Component {

  render() {
    const mapStyle = {
      width: 600,
      height: 380,
      border: '1px solid #283739'
    };

    return (
      <div>
        <div
          ref="map"
          style={mapStyle}
          alt="map - all trails"
          className="MainMap">
          I should be a map!
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.map = this.createMap();
    this.marker = this.createMarker();
  }

  createMap() {
    let mapOptions = {
     center: GOLDEN_LATLONG,
      zoom: 10
    }
    return new google.maps.Map(this.refs.map, mapOptions)
  }

// gather all positions from trails and render all markers on main map
  createMarker() {
    // map through trails for each position to make markers
    const { trails } = this.props;

    const displayMarkers = map(trails, (marker) => {
      return <Favorites key={marker.position} {...marker}/>
    });
    return new google.maps.Marker({
      position: this.props.coords,
      map: this.map
    })
  }
}

export default MainMap;
