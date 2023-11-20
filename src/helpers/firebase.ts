// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqNwBj8qMprnJGrRMpycqFb5HbgiyEveI",
  authDomain: "courseworktracker-1d20a.firebaseapp.com",
  projectId: "courseworktracker-1d20a",
  storageBucket: "courseworktracker-1d20a.appspot.com",
  messagingSenderId: "839786413372",
  appId: "1:839786413372:web:18d75c7553a8c7ab427239"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};