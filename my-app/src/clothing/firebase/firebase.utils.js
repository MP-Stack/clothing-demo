import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCeBAbOdqo6s5Gy4NjgcZkopwmj5BigyQc",
  authDomain: "clothing-demo.firebaseapp.com",
  databaseURL: "https://clothing-demo.firebaseio.com",
  projectId: "clothing-demo",
  storageBucket: "clothing-demo.appspot.com",
  messagingSenderId: "218156935674",
  appId: "1:218156935674:web:87ff9ca00dc1ff9add5c43",
  measurementId: "G-VZXT0E8B84"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;