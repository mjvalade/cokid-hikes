import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TrailDetails from '../components/TrailDetails';
import { fetchTrail, fetchLocalWeather } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    trailList: state.trails.data,
    selectedTrail: state.trails.selectedTrail,
    // trailWeather: state.localWeatherReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTrail,
    fetchLocalWeather
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailDetails);
