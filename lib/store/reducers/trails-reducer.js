import { initialState } from '../initialState';

export default function trailsReducer(state = initialState.trails.data, action) {
  switch(action.type) {

    case 'RECEIVE_TRAIL':
      return action.trail;

    case 'RECEIVE_ALL_TRAILS':
      return state.concat(action.trails);

    case 'CREATE_NEW_TRAIL':
      return {
        data: [...state.data || [], action.trail]
      };

    default:
      return state;
  }
}

// const trail = (state = {}, action) => {
//   switch (action.type) {
//     case 'CREATE_TRAIL':
//       return {
//         title: action.payload.title,
//         description: action.payload.description,
//         distance: action.payload.distance,
//         elevation: action.payload.elevation,
//         notes: action.payload.notes,
//       };
//
//     default:
//       return state;
//   }
// };
//
// const trails = (state = [], action) => {
//   console.log('in trails reducer: ' + action.type);
//   switch (action.type) {
//     case 'CREATE_TRAIL':
//       return [...state, trail(undefined, action)];
//     default:
//       return state;
//   }
// };
//
// export default trails;
