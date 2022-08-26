import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAMuaecY7LQXiYIreKc02E_7YNOQN34uIw",
    authDomain: "tiendatmsleon.firebaseapp.com",
    projectId: "tiendatmsleon",
    storageBucket: "tiendatmsleon.appspot.com",
    messagingSenderId: "709905134628",
    appId: "1:709905134628:web:50082148484371e4f5d4b1"
  };

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);