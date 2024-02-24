// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3mcgusVGg7FijBnEHBWFBxcekhTeqwPg",
  authDomain: "netflix-clonegpt.firebaseapp.com",
  projectId: "netflix-clonegpt",
  storageBucket: "netflix-clonegpt.appspot.com",
  messagingSenderId: "538735134248",
  appId: "1:538735134248:web:a745399b2be5f9026b571d",
  measurementId: "G-YX5MLJJ9G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();