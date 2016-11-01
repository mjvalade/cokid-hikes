import React, { Component } from 'react';
// import ForecastApi from './ForecastApi';


const Dashboard = (props) => {
console.log(props);
    return(
      <main className="Dashboard">
        {/* <ZipSearch /> */}
        <section className="DashMain">
          <p className="NatureQuote">
            “Teaching children about the natural world should be treated as one of the most important events in their lives.”
          </p>
          <p className="NatureQuote">
            – Thomas Berry
          </p>
          <img src="" alt="map" />
        </section>
        {/* <ForecastApi /> */}
      </main>
    )
  }

export default Dashboard;
