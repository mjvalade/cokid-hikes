const localWeatherReducer = (state = {}, action) => {
  switch (action.type) {

    case 'CURRENT_LOCAL_WEATHER':
    return Object.assign({}, state, action.currentLocalWeather);

    default:
    return state;
  }
};

export default localWeatherReducer;

// import { initialState } from '../initialState';
//
// export default function localWeatherReducer(state = initialState.local, action) {
//   switch(action.type) {
//     case 'CURRENT_LOCAL_WEATHER':
//       return {
//         data: action.local
//       };
//
//     default:
//       return state;
//   }
// }
