import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLocalWeather } from '../actions';
import { fetchAllTrails } from '../actions/index';

import Header from './Header';
import DashboardContainer from '../containers/DashboardContainer';
import SidebarContainer from '../containers/SidebarContainer';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchLocalWeather, fetchAllTrails }, dispatch);
};

class App extends Component {

  findUserCoords() {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.fetchLocalWeather({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
      // console.log('position', position.coords.latitude);
    });
  }

  componentDidMount() {
    this.props.fetchAllTrails();
    this.findUserCoords();
  }

  render() {
    let content;
    if (!this.props.trails) {
      content = 'Loading trails...';
    } else {
      content = (
        <div className="DashboardView">
          <SidebarContainer />
          <DashboardContainer />
        </div>
      );
    }

    return(
      <div className="MainView">
        <p>{content}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
