// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQMNK7NSOgYph0f8_iQWEkyXHpNJWvMn0",
  authDomain: "digital-news-layout.firebaseapp.com",
  projectId: "digital-news-layout",
  storageBucket: "digital-news-layout.appspot.com",
  messagingSenderId: "643562706333",
  appId: "1:643562706333:web:ef9eecdfbb5bd99a798b74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;