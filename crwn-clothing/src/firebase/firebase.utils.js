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

export const createUserProfileDocument = async (userAuth, additionalData) => {

     // if the user don't exist
   if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
       const {displayName, email} = userAuth;
       const createAt = new Date();

       try{
            // creating user
            await userRef.set({displayName, email, createAt, ...additionalData})
       }catch (error) {
            console.log("error creating user: ", error.message);
       }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



/*
* QueryReference and QuerySnapshot
*
* A query is a request we make to firebase to give us something form the database.
* Firestore returns us two types of objects: references and snapshots. Of these objects, they can be either Document or
* Collection version.
* Firestore will ALWAYS return us these objects, even if nothing exists at from that query.
*/

/*
* QueryReference
*
* A queryReference object is an object that represents the "current" place in the database that we are querying.
*
* We get them by calling either:
*    firestore.doc('/users/:userId');
*    firestore.collections('/users');
*
* The queryReference object does not have the actual data of the collection or document. It instead has properties that
* tell us details about it, or the method to get the Snapshot object which gives us the data we are looking for.
* */

/*
* DocumentReference vs CollectionReference
*
* We use documentRef objects to perform our CRUD methods (create, retrieve, update, delete). The documentRef methods are
* .set(), .get(), .updated() and .delete() respectively.
*
* We can also add document to collections using the collectionRed object using the .add() method.
* -> collectionRef.add({value: prop})
* We get the snapshotObject from the referenceObject using the .get() method. ie. documentRed.get() or collectionRed.get()
*
*    documentRef returns a documentSnapshot object.
*    collectionRef returns a querySnapshot object.
* */

/*
* DocumentSnapshot
*
* We get a documentSnapshot object from our documentReference object.
*
* The documentSnapshot objects allows us to check if a document exists at this query using the .exists property which
* returns a boolean. We cal also get the actual properties on the object by calling the .data() method, which returns us
* a JSON object of the document.
* */

/*
* QuerySnapshot
*
* We get a querySnapshot object from out collectionReference object.
*
* We can check if there are any documents in the collection by calling the .empty property which returns a boolean.
* We can get all the document in the collection by calling the .docs property. It returns an array of our document as
* documentSnapshot objects.
* */
