import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBC4L2O--2uv8kdCJ-hC8rLN2lxdIbPUkU",
    authDomain: "crwn-db-a7a84.firebaseapp.com",
    databaseURL: "https://crwn-db-a7a84.firebaseio.com",
    projectId: "crwn-db-a7a84",
    storageBucket: "crwn-db-a7a84.appspot.com",
    messagingSenderId: "51231385338",
    appId: "1:51231385338:web:7f86b693500927d6a0cb43"
  };
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
    
  export default firebase;

