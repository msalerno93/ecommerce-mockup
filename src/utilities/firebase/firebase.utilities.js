// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt3k4u-u_HQ2VZIMEPAsRZHhX5x3Gj8Kc",
  authDomain: "ecommerce-mockup-db.firebaseapp.com",
  projectId: "ecommerce-mockup-db",
  storageBucket: "ecommerce-mockup-db.appspot.com",
  messagingSenderId: "863463123405",
  appId: "1:863463123405:web:d62c2ceeafd7f0f138fc84",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)