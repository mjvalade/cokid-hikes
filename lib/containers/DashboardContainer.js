import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

const mapStateToProps = (state) => {
  return {
    allTrails: state.trails,
    weather: state.localWeatherReducer
  };
};

export default connect(mapStateToProps)(Dashboard);
