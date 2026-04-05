// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq4uH23daklSeRL2ZXve9Nuf3Q646dg9w",
  authDomain: "to-do-list-react-2309.firebaseapp.com",
  projectId: "to-do-list-react-2309",
  storageBucket: "to-do-list-react-2309.firebasestorage.app",
  messagingSenderId: "601591679076",
  appId: "1:601591679076:web:ad2c209e5640c085d2f771",
  measurementId: "G-LR3X5V2DE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);