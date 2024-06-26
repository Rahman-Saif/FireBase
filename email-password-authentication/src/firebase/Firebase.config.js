// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcG5UW2mA6MAcqALEn0W3qcDYSS-fzESs",
  authDomain: "user-email-password-auth-bef9d.firebaseapp.com",
  projectId: "user-email-password-auth-bef9d",
  storageBucket: "user-email-password-auth-bef9d.appspot.com",
  messagingSenderId: "974692281774",
  appId: "1:974692281774:web:13479a74affea68c45ec3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;