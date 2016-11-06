import React, { Component } from 'react';

const DENVER_LATLONG = {
  lat: 39.754185,
  lng: -105.230484
};

class Map extends Component {
  constructor() {
    super();
      this.state = {
        zoom: 10,
        position: {}
    };
  }

  render() {
    const mapStyle = {
      width: 600,
      height: 400,
      border: '1px solid black'
    };

    return (
      <div>
        <div ref="map" style={mapStyle}>
          Map
        </div>
        {/* <div className='UpdatedText'>
          <p>Current Zoom: { this.state.zoom }</p>
        </div> */}
        <div className='UpdatedText'>
          <p>Lat/Long: { this.state.position.lat }, { this.state.position.lng }</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.map = this.createMap();
    google.maps.event.addListener(
      this.map, 'zoom_changed', () => this.handleZoomChange());
    google.maps.event.addListener(
      this.map, 'click', (e) => this.setMarker(e.latLng));
  }

  componentDidUnMount() {
    google.maps.event.clearListeners(map, 'zoom_changed')
    google.maps.event.clearListeners(map, 'click')
  }

  createMap() {
    let mapOptions = {
     center: DENVER_LATLONG,
      zoom: this.state.zoom,
      mapTypeId: 'terrain'
    }
    return new google.maps.Map(this.refs.map, mapOptions)
  }

  handleZoomChange() {
    this.setState({
      zoom: this.map.getZoom()
    })
  }

  setMarker(latLng) {
    console.log('setMarker', latLng.lat(), latLng.lng());
    this.setState( {
      position: {
        lat: latLng.lat(),
        lng: latLng.lng()
      }
    })
    return new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.DROP,
      map: this.map
    });
  }
}

export default Map;
