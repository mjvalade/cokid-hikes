import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAjWOGb8Tl-WWTxDRtRDud4ot4ojzVuGFU",
  authDomain: "co-kid-hikes.firebaseapp.com",
  databaseURL: "https://co-kid-hikes.firebaseio.com",
  storageBucket: "co-kid-hikes.appspot.com",
  messagingSenderId: "548128761061"
});

const google = new firebase.auth.GoogleAuthProvider();

function startListeningToAuth() {
  return (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(authData => {
      if (authData) {
        dispatch({
          type: 'LOGIN',
          uid: authData.uid,
          username: authData.displayName
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

    firebase.auth().signInWithPopup(google)
    .then(result => {
      dispatch({
        type: 'LOGIN',
        uid: result.user.uid,
        username: result.user.displayName,
        favorites: result.user.favorites
      });
    })
    .catch(error => {
      console.log('Error logging in: ', error);
    });
  };
}

function logOut() {
  return (dispatch) => {
    dispatch({
      type: 'LOGOUT'
    });

    firebase.auth().signOut()
    .then(() => {
      console.log('Sign out successful!');
    });
  };
}

const starTrail = (starArray) => {
  return {
    type: 'STAR_TRAIL',
    favorites: starArray
  };
};

export {
  startListeningToAuth,
  logIn,
  logOut,
  starTrail
};
