import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLocalWeather } from '../actions';

import Header from './Header';
import DashboardContainer from '../containers/DashboardContainer';
import Sidebar from './Sidebar';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchLocalWeather}, dispatch);
};

class App extends Component {

  findUserCoords() {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.fetchLocalWeather(position);
      console.log(position);
    });
  }

  componentDidMount() {
    this.findUserCoords();
  }

  render() {
    return(
      <div className="MainView">
        <div className="DashboardView">
          <Sidebar />
          <DashboardContainer />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
