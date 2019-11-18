import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
     apiKey: "AIzaSyCAiUSGnP4Oo2pnVxmGLjmcJO8mW4-zSHQ",
     authDomain: "crwn-db-9ba28.firebaseapp.com",
     databaseURL: "https://crwn-db-9ba28.firebaseio.com",
     projectId: "crwn-db-9ba28",
     storageBucket: "crwn-db-9ba28.appspot.com",
     messagingSenderId: "467011936784",
     appId: "1:467011936784:web:6161b794edb6a75348e095",
     measurementId: "G-QYY3HVVB7B"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


