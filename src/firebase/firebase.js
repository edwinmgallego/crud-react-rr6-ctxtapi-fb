// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT97YmO9YpOh3bHbfCkjmbzNOEctzpMZg",
  authDomain: "crud-react-fb-bd.firebaseapp.com",
  projectId: "crud-react-fb-bd",
  storageBucket: "crud-react-fb-bd.appspot.com",
  messagingSenderId: "973362182693",
  appId: "1:973362182693:web:36e7d4bc6aaf9228db9dcc",
  measurementId: "G-KZB04760GZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
