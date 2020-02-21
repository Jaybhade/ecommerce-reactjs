import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDv5ulSBMhK7SkQs4_5Zn6ZMsFEYw__eMc",
    authDomain: "crwn-db-9b4ca.firebaseapp.com",
    databaseURL: "https://crwn-db-9b4ca.firebaseio.com",
    projectId: "crwn-db-9b4ca",
    storageBucket: "crwn-db-9b4ca.appspot.com",
    messagingSenderId: "1012287194141",
    appId: "1:1012287194141:web:531fc7d6fd7aed2d7ef2f4",
    measurementId: "G-9LZEPNKMV9"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user' + error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;