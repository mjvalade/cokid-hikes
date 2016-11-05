import React, { Component } from 'react';
import MainMap from './MainMap';
// import ForecastApi from './ForecastApi';

class Dashboard extends Component {



  render() {

    return(
      <main className="Dashboard">
      <section className="DashMain">
        <p className="NatureQuote">
        “Teaching children about the natural world should be treated as one of the most important events in their lives.”
        </p>
        <p className="NatureQuote">
        – Thomas Berry
        </p>
        <MainMap />
      </section>
      {/* <ForecastApi /> */}
      </main>
    )
  }
}


export default Dashboard;
