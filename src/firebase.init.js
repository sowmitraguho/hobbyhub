// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIxkxTwXSy3rQ2J_AqHMPRiUzkEO2clfw",
  authDomain: "hobbyhub-eaa68.firebaseapp.com",
  projectId: "hobbyhub-eaa68",
  storageBucket: "hobbyhub-eaa68.firebasestorage.app",
  messagingSenderId: "895415252945",
  appId: "1:895415252945:web:e9b1b8853cb66ceced52f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);