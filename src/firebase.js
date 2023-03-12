// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-panel-app-533bd.firebaseapp.com",
  projectId: "react-panel-app-533bd",
  storageBucket: "react-panel-app-533bd.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_KEY,
  appId: process.env.REACT_APP_ID_KEY
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);