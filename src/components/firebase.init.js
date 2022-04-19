// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl6-zKH6ukM1PigpzAMY5p8LGSnQ8TSZk",
  authDomain: "tutor-of-science.firebaseapp.com",
  projectId: "tutor-of-science",
  storageBucket: "tutor-of-science.appspot.com",
  messagingSenderId: "825501503272",
  appId: "1:825501503272:web:d9efe482a3e6a692b1ca1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;