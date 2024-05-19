// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeFMPu-JvxW6BGCZQ2vJvNNOAyLrFxXQQ",
  authDomain: "proyecto-aplicaciones-emp.firebaseapp.com",
  projectId: "proyecto-aplicaciones-emp",
  storageBucket: "proyecto-aplicaciones-emp.appspot.com",
  messagingSenderId: "358562980708",
  appId: "1:358562980708:web:bab343c61bbffb9b6d9071"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);