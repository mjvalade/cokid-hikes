import firebase from 'firebase';

const firebaseTrails = firebase.database().ref('trails');

// export const createTrail = (payload) => {
//   return {
//     type: 'CREATE_TRAIL',
//     payload
//   };
// };

export const createTrail = (trailData) => {
  return (dispatch) => {

    // we need to create a new unique key to store our trail
    // data under. this will tell firebase to put this particular
    // trail that we're saving under trails/<unique-key>
    let newTrailKey = firebaseTrails.push().key;

     // access the new "table row" we created under `trails/<unique-key`
     // and set the data for it
      firebaseTrails.child(newTrailKey).set(trailData)
      .then(() => {  // when the write to the database was successful, finally dispatch our action
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
