// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG5eJPDCjFW3INPG5hKqfvSukb-6f1kQ8",
  authDomain: "paya-a97fb.firebaseapp.com",
  projectId: "paya-a97fb",
  storageBucket: "paya-a97fb.appspot.com",
  messagingSenderId: "216389307820",
  appId: "1:216389307820:web:3601d8c17f31bf66ee3e09",
  measurementId: "G-2N1KJZRLT9"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);


export default fire;