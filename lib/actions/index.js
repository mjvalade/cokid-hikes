import firebase from 'firebase';

const firebaseTrails = firebase.database().ref('trails');

export const fetchAllTrails = () => {
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
};

export const createTrail = (trailData) => {
  return (dispatch) => {

    let newTrailKey = firebaseTrails.push().key;

      firebaseTrails.child(newTrailKey).set(trailData)
      .then(() => {
        dispatch({
          type: 'CREATE_NEW_TRAIL',
          trail: trailData
        });
      })
      .catch(error => {
        console.log("Error saving trail: ", error);
      });
  };
};
