// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE7zMJJQYcBJWfggMG07NmlVa9FoLsjC4",
  authDomain: "laundry-application-99ffd.firebaseapp.com",
  projectId: "laundry-application-99ffd",
  storageBucket: "laundry-application-99ffd.appspot.com",
  messagingSenderId: "515278514786",
  appId: "1:515278514786:web:c2841c0dbe1db3d1cfbf3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};