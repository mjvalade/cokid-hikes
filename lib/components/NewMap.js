import React, { Component } from 'react';

const DENVER_LATLONG = {
  lat: 39.754185,
  lng: -105.230484
};

class NewMap extends Component {
  // constructor() {
  //   super();
  //     this.state = {
  //       position: {}
  //   };
  // }

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
        {/* <div className='UpdatedText'>
          <p>Lat/Long: { this.state.position.lat }, { this.state.position.lng }</p>
        </div> */}
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

  // setMarker(latLng) {
  //   console.log('setMarker', latLng.lat(), latLng.lng());
  //   this.setState({
  //     position: {
  //       lat: latLng.lat(),
  //       lng: latLng.lng()
  //     }
  //   })
  //   // add position to new trail being created
  //   // make array of coords to pull out and render specific i associated with uid?
  //   return new google.maps.Marker({
  //     animation: google.maps.Animation.DROP,
  //     position: latLng,
  //     map: this.map
  //   });
  // }
}

export default NewMap;
