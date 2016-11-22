import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllTrails, fetchLocalWeather } from '../actions';
import { fetchFavoriteTrails } from '../actions/auth';

import Header from './Header';
import DashboardContainer from '../containers/DashboardContainer';
import SidebarContainer from '../containers/SidebarContainer';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchLocalWeather, fetchAllTrails, fetchFavoriteTrails }, dispatch);
};

class App extends Component {

  findUserCoords() {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.fetchLocalWeather(position);
    });
  }

  componentDidMount() {
    this.props.fetchAllTrails();
    this.props.fetchFavoriteTrails();
    this.findUserCoords();
  }


  render() {
    return(
      <div className="MainView">
        <div className="DashboardView">
          <SidebarContainer />
          <DashboardContainer />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
