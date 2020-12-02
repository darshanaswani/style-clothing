import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDAuTBkjqtOQ9FS0flykD6iZZJyk9eRFbU",
  authDomain: "style-db-167f0.firebaseapp.com",
  databaseURL: "https://style-db-167f0.firebaseio.com",
  projectId: "style-db-167f0",
  storageBucket: "style-db-167f0.appspot.com",
  messagingSenderId: "969214671684",
  appId: "1:969214671684:web:51307aab15dc222b08f511",
  measurementId: "G-8N0WVXXCGF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
