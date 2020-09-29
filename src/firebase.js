import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj2LQVlQOeKUZ9yXV5959fzirfaUI1ii8",
  authDomain: "spotify-clone-1ffd0.firebaseapp.com",
  databaseURL: "https://spotify-clone-1ffd0.firebaseio.com",
  projectId: "spotify-clone-1ffd0",
  storageBucket: "spotify-clone-1ffd0.appspot.com",
  messagingSenderId: "832616737327",
  appId: "1:832616737327:web:0f987e607126899fd174da",
  measurementId: "G-6Q8BQRCR86",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
