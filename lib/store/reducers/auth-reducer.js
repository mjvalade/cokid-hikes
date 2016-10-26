import { initialState } from '../initialState';

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
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
        uid: action.uid
      };
    default:
      return state;
  }
}
