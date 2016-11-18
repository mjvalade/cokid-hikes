import firebase, { firebaseUsers } from '../firebase';

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyAjWOGb8Tl-WWTxDRtRDud4ot4ojzVuGFU",
//   authDomain: "co-kid-hikes.firebaseapp.com",
//   databaseURL: "https://co-kid-hikes.firebaseio.com",
//   storageBucket: "co-kid-hikes.appspot.com",
//   messagingSenderId: "548128761061"
// });
//
const google = new firebase.auth.GoogleAuthProvider();
// let user;

// const firebaseUsers = firebase.database().ref('users');

function startListeningToAuth() {
  return (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(authData => {
      if (authData) {
        firebaseUsers.child(authData.uid).once('value').then(result => {
          let trailFavorites = result.val().favorites;
          // result.forEach(user => {
          //   console.log('user result', user);
          console.log('result.val', result.val().favorites);
          dispatch({
            type: 'LOGIN',
            uid: authData.uid,
            username: authData.displayName,
            favorites: trailFavorites,
            userId: authData.userId
          });
          // });
        });
        // let newUserKey = firebaseUsers.push().key;
        // firebaseUsers.child(newUserKey).set(authData.favorites);

        // firebase.database().ref('users/' + authData.userId).set({
        //   favorites: []
        // });
      } else {
        if (getState().auth.status !== 'ANONYMOUS') {
          dispatch({
            type: 'LOGOUT'
          });
        }
      }
    });
  };
}

function logIn() {
  return (dispatch) => {
    dispatch({
      type: 'ATTEMPTING_LOGIN'
    });

    firebase.auth().signInWithPopup(google)
    .then(result => {
      dispatch({
        type: 'LOGIN',
        uid: result.user.uid,
        username: result.user.displayName,
        favorites: result.user.favorites,
        userId: result.user.userId
      });
      // firebase.database().ref('users/' + result.user.userId).set({
      //   favorites: []
      // });
    })
    .catch(error => {
      console.log('Error logging in: ', error);
    });
  };
}

function logOut() {
  firebase.auth().signOut()
  .then(() => {
    console.log('Sign out successful!');
  });

  return (dispatch) => {
    dispatch({
      type: 'LOGOUT'
    });
  };
}


function starTrail(userId, favorites, trailData) {
  console.log('userId', userId, arguments);
  return (dispatch) => {
    firebaseUsers.child(userId).set({
      favorites: favorites.concat([trailData.uid])
    })
    .then(() => {
      console.log('FAVORITES UPDATED');
      dispatch({
        type: 'STAR_TRAIL',
        trail: trailData.uid
      });
    })
    .catch(e => console.log(e));
  };
}


function fetchFavoriteTrails(userId) {
  let firebaseUsersId = firebase.database().ref('users/' + userId);

  return (dispatch) => {
    let fetchedFaves = [];

    firebaseUsersId.once('value').then(result => {
      // console.log('result:', result);
      result.forEach(faves => {
        fetchedFaves.push(faves.val());
      });
      console.log('fetchedFaves:', fetchedFaves);
      dispatch({
        type: 'RECEIVE_FAVORITES',
        faves: fetchedFaves
      });
    });
  };
}

export {
  startListeningToAuth,
  logIn,
  logOut,
  starTrail,
  fetchFavoriteTrails
};
