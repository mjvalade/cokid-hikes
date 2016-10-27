// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
//
// import authReducer from './reducers/auth-reducer';
// import initialState from './initialState';
//
// export default createStore(
//   combineReducers({
//     auth: authReducer,
//   }),
//   initialState,
//   applyMiddleware(thunk)
// );


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));
