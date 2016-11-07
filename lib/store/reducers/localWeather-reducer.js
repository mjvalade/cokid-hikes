export default function localWeatherReducer(state = {}, action) {
  switch (action.type) {

    case 'CURRENT_LOCAL_WEATHER':
    return Object.assign({}, state, action.currentLocalWeather);

    default:
    return state;
  }
}
