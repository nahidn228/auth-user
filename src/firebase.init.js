// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCxWC0PboLLfW3WjXhuI1oF1umf6qGfcQ",
  authDomain: "auth-user-b37c0.firebaseapp.com",
  projectId: "auth-user-b37c0",
  storageBucket: "auth-user-b37c0.firebasestorage.app",
  messagingSenderId: "503593772125",
  appId: "1:503593772125:web:546f2db5e21fb1a888d9b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
