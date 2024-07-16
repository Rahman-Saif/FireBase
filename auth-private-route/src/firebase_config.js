// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANaOdIV6I2FadasXE3G5M2hab-46eHZHc",
  authDomain: "auth-private-route-fdd1d.firebaseapp.com",
  projectId: "auth-private-route-fdd1d",
  storageBucket: "auth-private-route-fdd1d.appspot.com",
  messagingSenderId: "57692310279",
  appId: "1:57692310279:web:2c4a3aa1941b6493cc53a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;