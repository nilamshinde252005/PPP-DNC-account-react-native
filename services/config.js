// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore"
import 'firebase/auth';
import firebase from 'firebase/compat/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIKe1J97Q8AqIRsgWuL1gBUDYLotgEjOQ",
  authDomain: "ppp-dnc-account.firebaseapp.com",
  databaseURL: "https://ppp-dnc-account-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ppp-dnc-account",
  storageBucket: "ppp-dnc-account.appspot.com",
  messagingSenderId: "312318068646",
  appId: "1:312318068646:web:accba074fefffce5aff167",
  measurementId: "G-10XSPGGSB8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log('app', JSON.stringify(app));
//const firestore = firebase.firestore();
const analytics = getAnalytics(app);
console.log(analytics);

export { app, analytics };