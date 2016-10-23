import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ZipSearch from './ZipSearch';
import ForecastApi from './ForecastApi';

export default class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <main className="Dashboard">
        <p className="NatureQuote">
          “Teaching children about the natural world should be treated as one of the most important events in their lives.” – Thomas Berry
        </p>
        <img src="" alt="map" />
        <Sidebar />
        <ZipSearch />
        <ForecastApi />
      </main>
    )
  }
}
