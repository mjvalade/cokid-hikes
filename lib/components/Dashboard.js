import React, { Component } from 'react';
import MainMap from './MainMap';

const Dashboard = ({weather, allTrails}) => {
  console.log("allTrails.data", allTrails.data);

  return(
      <main className="Dashboard">
        <section className="DashMain">
          <article className="NatureQuote">
            <p>
            “Teaching children about the natural world should be treated as one of the most important events in their lives.”
            </p>
            <p>
            – Thomas Berry
            </p>
          </article>
          <article className="ForecastCurrent">
            {Object.keys(weather).length
              ? <p>Current forecast for {weather.name}: {weather.weather[0].main} {Math.round(weather.main.temp)}&#8457;</p>
              : <p>Fetching Local Weather ...</p>}
          </article>
          {/* <img src="../../public/assets/mountains-card.png" alt="landscape" className="DetailImg" /> */}
          <MainMap trails={allTrails.data} />
        </section>
      </main>
    )
  }


export default Dashboard;
