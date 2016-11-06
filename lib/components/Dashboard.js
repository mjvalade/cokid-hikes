import React, { Component } from 'react';
import MainMap from './MainMap';
// import ForecastApi from './ForecastApi';

const Dashboard = ({local}) => {
  console.log(local);

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
        <article className="forecast-current">
          {/* {Object.keys(localWeatherReducer).length
            ? <p>Current forecast for {localWeatherReducer.name}: {localWeatherReducer.weather[0].main} {Math.round(localWeatherReducer.main.temp)}&#8457;</p>
            : <p>Fetching Local Weather ...</p>} */}
        </article>
      </section>
      {/* <ForecastApi /> */}
      </main>
    )
  }


export default Dashboard;
