// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCZ_0CmKevPAE34H8wdZEMmJjBpBFlo_Mk",
  authDomain: "cat-worlddomination.firebaseapp.com",
  projectId: "cat-worlddomination",
  storageBucket: "cat-worlddomination.firebasestorage.app",
  messagingSenderId: "605254666466",
  appId: "1:605254666466:web:4f438a2be1b8c8f69d76bb"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };