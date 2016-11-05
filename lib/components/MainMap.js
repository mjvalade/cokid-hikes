import React, { Component } from 'react';

const DENVER_LATLONG = {
  lat: 39.754185,
  lng: -105.230484
};

class MainMap extends Component {
  constructor() {
    super();

  }

  render() {
    const mapStyle = {
      width: 600,
      height: 400,
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
     center: DENVER_LATLONG,
      zoom: 10
    }
    return new google.maps.Map(this.refs.map, mapOptions)
  }

  createMarker() {
    return new google.maps.Marker({
      position: {lat: 39.797920, lng: -105.493301},
      map: this.map
    })
  }


}

export default MainMap;
//
// ReactDOM.render(
//   <Map />,
//   document.getElementById('root')
// );
