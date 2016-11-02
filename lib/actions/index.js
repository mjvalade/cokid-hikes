import fetch from 'isomorphic-fetch';
import firebase from 'firebase';

const firebaseTrails = firebase.database().ref('trails');

const apiKey = 'f4c4b366ab190a9052d740dd5d8fea64';

function createTrail(trailData) {
  return (dispatch) => {

    let newTrailKey = firebaseTrails.push().key;

      firebaseTrails.child(newTrailKey).set(trailData)
      .then(() => {
        console.log('trailData', trailData);
        dispatch({
          type: 'CREATE_NEW_TRAIL',
          trail: trailData
        });
      })
      .catch(error => {
        console.log("Error saving trail: ", error);
      });
  };
}

function fetchAllTrails() {
  return (dispatch, getState) => {
    let fetchedTrails = [];

    firebaseTrails.once('value').then(result => {
      result.forEach(trail => {
        fetchedTrails.push(trail.val());
      });
      dispatch({
        type: 'RECEIVE_ALL_TRAILS',
        trails: fetchedTrails
      });
    });
  };
}

function fetchTrail() {
  return (dispatch, getState) => {
debugger
  let trail = {};
    dispatch({
      type: 'RECEIVE_TRAIL',
      trail
    });
  };
}

export {
  createTrail,
  fetchAllTrails,
  fetchTrail
};

export const receiveCurrentLocalWeather = (json) => {
  return {
    type: 'CURRENT_LOCAL_WEATHER',
    currentLocalWeather: json
  };
};

export const fetchLocalWeather = (position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let weatherURLbyCoords = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`;

  return (dispatch) => {
    return fetch(weatherURLbyCoords)
      .then(response => response.json())
      .then(jsonResponse => dispatch(receiveCurrentLocalWeather(jsonResponse)));
  };
};
