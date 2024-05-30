// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmH43x1S9BoaN--0sVpHYHvuM8Dn_gaJI",
  authDomain: "netflixgpt-47174.firebaseapp.com",
  projectId: "netflixgpt-47174",
  storageBucket: "netflixgpt-47174.appspot.com",
  messagingSenderId: "919475523789",
  appId: "1:919475523789:web:cfbe22272558ca0197d984",
  measurementId: "G-VLTEW3PBTN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
