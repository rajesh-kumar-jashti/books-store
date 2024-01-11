// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwHOWiSXx9wLZrKkemih8fhY23LFNGdDQ",
  authDomain: "books-store-c50ba.firebaseapp.com",
  projectId: "books-store-c50ba",
  storageBucket: "books-store-c50ba.appspot.com",
  messagingSenderId: "1097069035080",
  appId: "1:1097069035080:web:15fd0d4ebd6f732f77227d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;