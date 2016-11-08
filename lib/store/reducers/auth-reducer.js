import { initialState } from '../initialState';
// import { map } from 'lodash';

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {

    case 'ATTEMPTING_LOGIN':
      return {
        status: 'AWATING_AUTH_RESPONSE',
        username: 'guest',
        uid: null
      };

    case 'LOGOUT':
      return {
        status: 'ANONYMOUS',
        username: 'guest',
        uid: null
      };

    case 'LOGIN':
      return {
        status: 'LOGGED_IN',
        username: action.username,
        uid: action.uid,
        favorites: action.favorites
      };

    case 'STAR_TRAIL':
      return {
        data: state.data,
        favorites: action.starArray
      };

    // case 'STAR_GROCERY':
    //   return state.map(item => {
    //     if (item.id !== action.id) { return item; }
    //     return Object.assign(item, { starred: !item.starred });
    //   });

    default:
      return state;
  }
}
