import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "we-demo-432d1.firebaseapp.com",
    projectId: "we-demo-432d1",
    storageBucket: "we-demo-432d1.firebasestorage.app",
    messagingSenderId: "976280001912",
    appId: "1:976280001912:web:85ab456f24766a56333c8d",
    measurementId: "G-TPC9SSDWQF"
  };

  // initialize FIrebase
  const app = initializeApp(firebaseConfig);

  // export teh firestore instance
  export const db = getFirestore(app);

  export const auth = getAuth(app);