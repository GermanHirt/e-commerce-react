// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtpCVwNM_vKE9iRsmYRn110uD5v64cPGk",
  authDomain: "pittshop-11017.firebaseapp.com",
  projectId: "pittshop-11017",
  storageBucket: "pittshop-11017.appspot.com",
  messagingSenderId: "1017904532354",
  appId: "1:1017904532354:web:e343775bc1b7d0e07ddd9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);