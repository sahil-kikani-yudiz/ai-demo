// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmglMu0dAWUXoI2JmpNrQbuugYJICBGRQ",
  authDomain: "ai-demo-4c349.firebaseapp.com",
  projectId: "ai-demo-4c349",
  storageBucket: "ai-demo-4c349.appspot.com",
  messagingSenderId: "82835183610",
  appId: "1:82835183610:web:85177c7adf50e7e7637643",
  measurementId: "G-CG9H0SQ6YB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);