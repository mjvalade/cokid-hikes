import React, { Component } from 'react';

const DENVER_LATLONG = {
  lat: 39.754185,
  lng: -105.230484
};

class NewMap extends Component {

  render() {
    const mapStyle = {
      width: 600,
      height: 400,
      border: '1px solid black'
    };

    return (
      <div>
        <div ref="map" style={mapStyle}>
          NewMap
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.map = this.createMap();
    google.maps.event.addListener(
      this.map, 'click', (e) => this.props.handleClick(e.latLng));
  }

  componentDidUnMount() {
    google.maps.event.clearListeners(map, 'click')
  }

  createMap() {
    let mapOptions = {
      center: DENVER_LATLONG,
      zoom: 10,
      mapTypeId: 'terrain'
    }
    return new google.maps.Map(this.refs.map, mapOptions)
  }
}

export default NewMap;
