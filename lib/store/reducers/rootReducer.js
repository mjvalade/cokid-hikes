import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import trailsReducer from './trails-reducer';
import localWeatherReducer from './localWeather-reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  trails: trailsReducer,
  localWeatherReducer
});

export default rootReducer;
