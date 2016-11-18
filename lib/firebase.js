import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAjWOGb8Tl-WWTxDRtRDud4ot4ojzVuGFU",
  authDomain: "co-kid-hikes.firebaseapp.com",
  databaseURL: "https://co-kid-hikes.firebaseio.com",
  storageBucket: "co-kid-hikes.appspot.com",
  messagingSenderId: "548128761061"
};

firebase.initializeApp(config);

// const google = new firebase.auth.GoogleAuthProvider();
export const firebaseUsers = firebase.database().ref('users');
export const firebaseTrails = firebase.database().ref('trails');

export default firebase;
