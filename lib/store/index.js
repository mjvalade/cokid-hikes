import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth-reducer';
import initialState from './initialState';

export default createStore(
  combineReducers({
    auth: authReducer,
  }),
  initialState,
  applyMiddleware(thunk)
);
