import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAjWOGb8Tl-WWTxDRtRDud4ot4ojzVuGFU",
  authDomain: "co-kid-hikes.firebaseapp.com",
  databaseURL: "https://co-kid-hikes.firebaseio.com",
  storageBucket: "co-kid-hikes.appspot.com",
  messagingSenderId: "548128761061"
});

const google = new firebase.auth.GoogleAuthProvider();
let user;

const firebaseUsers = firebaseApp.database().ref('users');

function startListeningToAuth() {
  return (dispatch, getState) => {



    firebaseApp.auth().onAuthStateChanged(authData => {
      if (authData) {
        // const firebaseUsers = firebase.database().ref('users/' + authData.uid);

        dispatch({
          type: 'LOGIN',
          uid: authData.uid,
          username: authData.displayName,
          favorites: authData.favorites,
          userId: authData.userId
        });
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

    firebaseApp.auth().signInWithPopup(google)
    .then(result => {

      // in the reducer?
      // user = firebase.database().ref('users/' + result.user.uid);

      dispatch({
        type: 'LOGIN',
        uid: result.user.uid,
        username: result.user.displayName,
        favorites: result.user.favorites,
        userId: result.user.userId
      });
    })
    .catch(error => {
      console.log('Error logging in: ', error);
    });
  };
}

function logOut() {
  firebaseApp.auth().signOut()
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
    firebaseApp.database().ref('users/' + userId).set({
      starredTrails: favorites
    })
    .then(() => {
      console.log('firebaseApp save', arguments);
      dispatch({
        type: 'STAR_TRAIL',
        trail: trailData
      });
    })
    .catch(e => console.log(e));
  };
}


function fetchFavoriteTrails(userId) {
  const firebaseAppUsers = firebaseApp.database().ref('users/' + userId);

  return (dispatch) => {
    let fetchedFaves = [];

    firebaseAppUsers.once('value').then(result => {
      console.log('result:', result);
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
