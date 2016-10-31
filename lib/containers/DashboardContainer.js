import { connect } from 'react-redux';
import ForecastApi from './ForecastApi';

const mapStateToProps = (state) => ({localWeatherReducer: state.localWeatherReducer});

export default connect(mapStateToProps)(ForecastApi);
