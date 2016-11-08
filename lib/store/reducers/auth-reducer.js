import { initialState } from '../initialState';
// import { map } from 'lodash';

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {

    case 'ATTEMPTING_LOGIN':
      return {
        status: 'AWATING_AUTH_RESPONSE',
        username: 'guest',
        uid: null,
        favorites: []
      };

    case 'LOGOUT':
      return {
        status: 'ANONYMOUS',
        username: 'guest',
        uid: null,
        favorites: []
      };

    case 'LOGIN':
      return {
        status: 'LOGGED_IN',
        username: action.username,
        uid: action.uid,
        favorites: action.favorites || []
      };

    case 'STAR_TRAIL':
      return Object.assign(state, {
        favorites: state.favorites.concat(action.trail)
      });

    default:
      return state;
  }
}
