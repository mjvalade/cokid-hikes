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
          username: authData.displayName,
          favorites: authData.favorites
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
  const firebaseFaves = firebase.database().ref('users/' + userId);
  return (dispatch) => {
    firebaseFaves.set({
      starredTrails: favorites
    })
    .then(() => {
      console.log('firebase save');
      dispatch({
        type: 'STAR_TRAIL',
        trail: trailData
      });
    });
  };
}

// function to fetch Favorite Trails and call in App/componentDidMount

function fetchFavoriteTrails(userId) {
  const firebaseFaves = firebase.database().ref('users/' + userId);
  return (dispatch) => {
    let fetchedFaves = [];

    firebaseFaves.once('value').then(result => {
      result.forEach(faves => {
        fetchedFaves.push(faves.val());
      });
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
