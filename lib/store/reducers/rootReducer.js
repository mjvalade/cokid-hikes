import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import trailsReducer from './trails-reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  trails: trailsReducer
});

export default rootReducer;
