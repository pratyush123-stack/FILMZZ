import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCFI5bV9i7QZSu1_gSfgvA-7AFDez3iK1E",
  authDomain: "filmzz-33478.firebaseapp.com",
  projectId: "filmzz-33478",
  storageBucket: "filmzz-33478.appspot.com",
  messagingSenderId: "619139791985",
  appId: "1:619139791985:web:e641c8c14c2b2ce8532fd0",
  measurementId: "G-CMQ8JLQR69"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;