import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA27DQEEfEdfXPJVQ52XICxdauCxcvaSiU",
    authDomain: "leetcode-d7232.firebaseapp.com",
    projectId: "leetcode-d7232",
    storageBucket: "leetcode-d7232.appspot.com",
    messagingSenderId: "382729271681",
    appId: "1:382729271681:web:aec2d69f7c2fbd1a739080",
    measurementId: "G-3C1K7V76JC"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);