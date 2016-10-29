import React, { Component } from 'react';


export default class ForecastApi extends Component {
  constructor() {
    super()
  }

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
