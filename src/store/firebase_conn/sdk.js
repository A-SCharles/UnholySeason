// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUXuqzpwEiKEoj1Re4JSPzv_kJLxCnPG0",
  authDomain: "unholyseason-3ff41.firebaseapp.com",
  projectId: "unholyseason-3ff41",
  storageBucket: "unholyseason-3ff41.appspot.com",
  messagingSenderId: "790780896365",
  appId: "1:790780896365:web:93548f4102c633259c8b64"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig)
export default firebase.initializeApp(firebaseConfig)