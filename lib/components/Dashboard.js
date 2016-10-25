import React, { Component } from 'react';
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
          “Teaching children about the natural world should be treated as one of the most important events in their lives.”
        </p>
        <p className="NatureQuote">
          – Thomas Berry
        </p>
        <img src="" alt="map" />
        <ZipSearch className="ZipComponent"/>
        <ForecastApi className="WeatherComponent"/>
      </main>
    )
  }
}
