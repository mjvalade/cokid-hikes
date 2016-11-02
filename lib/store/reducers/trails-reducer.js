import { initialState } from '../initialState';

export default function trailsReducer(state = initialState.trails, action) {
  switch(action.type) {

    case 'RECEIVE_ALL_TRAILS':
      let trailsData = state;
      if (action.trails.length !== state.data.length) {
        trailsData = {
          data: action.trails,
          selectedTrail: state.selectedTrail
        };
      }
      return trailsData;

    case 'CREATE_NEW_TRAIL':
      return {
        data: [...state.data || [], action.trail],
        selectedTrail: state.selectedTrail
      };

    case 'SET_SELECTED_TRAIL':
      return {
        data: state.data,
        selectedTrail: action.uid
      };

    default:
      return state;
  }
}
