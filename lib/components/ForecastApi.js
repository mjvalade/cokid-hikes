import React, { Component } from 'react';


export default class ForecastApi extends Component {
  constructor() {
    super()
  }

  // const apiKey = 'f4c4b366ab190a9052d740dd5d8fea64';
  render() {
    return(
      <section className="Forecast Aside Aside-3">
        <h2>Local Forecast</h2>
        {/* insert API */}
        <img src="" alt="forecast" className="weatherApi"/>
      </section>
    )
  }
}
