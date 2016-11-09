import fetch from 'isomorphic-fetch';
// import firebase from 'firebase';
import { firebaseTrails } from '../firebase';


// const firebaseTrails = firebase.database().ref('trails');

// google mapApiKey = AIzaSyDdszB_F_2BL9CwE83cXn_1w80Od2myCTs;

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
  return (dispatch) => {
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

const setSelectedTrail = (uid) => {
  return {
    type: 'SET_SELECTED_TRAIL',
    uid: uid
  };
};

const starTrail = (uid) => {
  return {
    type: 'STAR_TRAIL',
    uid: uid
  };
};

const receiveCurrentLocalWeather = (json) => {
  return {
    type: 'CURRENT_LOCAL_WEATHER',
    currentLocalWeather: json
  };
};

const weatherKey = 'f4c4b366ab190a9052d740dd5d8fea64';

const fetchLocalWeather = (position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let weatherURLbyCoords = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${weatherKey}`;

  return (dispatch) => {
    return fetch(weatherURLbyCoords)
      .then(response => response.json())
      .then(jsonResponse => dispatch(receiveCurrentLocalWeather(jsonResponse)));
  };
};

export {
  createTrail,
  fetchAllTrails,
  setSelectedTrail,
  starTrail,
  receiveCurrentLocalWeather,
  fetchLocalWeather
};
