import React, { Component } from 'react';


const ForecastApi = ({localWeatherReducer}) => {

  console.log(localWeatherReducer);
  return(
    <section className="Forecast Aside Aside-3">
      <h2>Local Forecast</h2>
      <article>
        {Object.keys(localWeatherReducer).length
          ? <p>{localWeatherReducer.name}: {localWeatherReducer.weather[0].main} {Math.round(localWeatherReducer.main.temp)}&#8457;</p>
          : <p>Fetching Local Weather ...</p>}
        </article>
      <img src="" alt="forecast" className="weatherApi"/>
    </section>
  )
}

export default ForecastApi;
