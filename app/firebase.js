// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQvT_akli3tKNOu_ZyUYCaNZkh4YY-G0I",
  authDomain: "prohitb-2a2ec.firebaseapp.com",
  projectId: "prohitb-2a2ec",
  storageBucket: "prohitb-2a2ec.firebasestorage.app",
  messagingSenderId: "231156309958",
  appId: "1:231156309958:web:6fa3f278d48ba7e87e9cc7",
  measurementId: "G-1N0MJWB3MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, addDoc, collection };
