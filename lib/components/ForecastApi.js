import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';

class ForecastApi extends Component {

  render() {
    console.log(this.props);
    return(
      <section className="Forecast Aside Aside-3">
      <h2>Local Forecast</h2>
      {/* <article>
        {Object.keys(localWeatherReducer).length
        ? <p>{localWeatherReducer.name}: {localWeatherReducer.weather[0].main} {Math.round(localWeatherReducer.main.temp)}&#8457;</p>
        : <p>Fetching Local Weather ...</p>}
        </article> */}
        <img src="" alt="forecast" className="weatherApi"/>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ localWeatherReducer: state.localWeatherReducer });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ForecastApi);
