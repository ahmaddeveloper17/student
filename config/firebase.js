// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwkDZqFphob1avKYJoIaSAPduZz3gEHms",
  authDomain: "student-aec5d.firebaseapp.com",
  projectId: "student-aec5d",
  storageBucket: "student-aec5d.appspot.com",
  messagingSenderId: "931856308306",
  appId: "1:931856308306:web:152a104697e22e5bc1a78b",
  measurementId: "G-1R201GXK4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);