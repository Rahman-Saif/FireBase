// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtiO47zvf5lp77a72tFeDLzZjKvUIR3vE",
  authDomain: "simple-firebase-ebf1e.firebaseapp.com",
  projectId: "simple-firebase-ebf1e",
  storageBucket: "simple-firebase-ebf1e.appspot.com",
  messagingSenderId: "663585774931",
  appId: "1:663585774931:web:272dbf302c62c0984b55a6",
  measurementId: "G-EL4LFGWMBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
