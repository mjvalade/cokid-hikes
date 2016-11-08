import firebase from 'firebase';

window.firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAjWOGb8Tl-WWTxDRtRDud4ot4ojzVuGFU",
  authDomain: "co-kid-hikes.firebaseapp.com",
  databaseURL: "https://co-kid-hikes.firebaseio.com",
  storageBucket: "co-kid-hikes.appspot.com",
  messagingSenderId: "548128761061"
});

const google = new firebase.auth.GoogleAuthProvider();

const firebaseUsers = firebase.database().ref('users');

function startListeningToAuth(favoriteTrails) {
  return (dispatch, getState) => {

    let newUserKey = firebaseUsers.push().key;
    
      firebaseUsers.child(newUserKey).set(favoriteTrails)
        .then(() => {
          console.log('faves', favoriteTrails);

        });

    firebaseApp.auth().onAuthStateChanged(authData => {
      if (authData) {
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
