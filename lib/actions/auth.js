import firebase, { firebaseUsers } from '../firebase';

const google = new firebase.auth.GoogleAuthProvider();

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
