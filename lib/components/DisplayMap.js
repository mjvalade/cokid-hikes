import React, { Component } from 'react';

const DENVER_LATLONG = {
  lat: 39.754185,
  lng: -105.230484
};

class DisplayMap extends Component {

  render() {
    const mapStyle = {
      width: 400,
      height: 400,
      border: '2px solid #A2C11C'
    };

    return (
      <div>
        <div
          ref="map"
          style={mapStyle}
          alt="map - all trails"
          className="DisplayMap">
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
      position: this.props.coords,
      map: this.map
    })
  }


}

export default DisplayMap;
