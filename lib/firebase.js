import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAjWOGb8Tl-WWTxDRtRDud4ot4ojzVuGFU",
  authDomain: "co-kid-hikes.firebaseapp.com",
  databaseURL: "https://co-kid-hikes.firebaseio.com",
  storageBucket: "co-kid-hikes.appspot.com",
  messagingSenderId: "548128761061"
});

export default firebase;

export const google = new firebase.auth.GoogleAuthProvider();
export const firebaseTrails = firebase.database().ref('trails');
