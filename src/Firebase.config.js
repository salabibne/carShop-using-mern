// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqTa0S_YUaaPavGP6J_eNWsGN9a5ys1hc",
  authDomain: "siatos.firebaseapp.com",
  projectId: "siatos",
  storageBucket: "siatos.appspot.com",
  messagingSenderId: "28077111777",
  appId: "1:28077111777:web:a6f78be265fdf2e076baa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app