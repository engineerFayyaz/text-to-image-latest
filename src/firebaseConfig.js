// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ7YNRP0zQ5ALqJtGngMYMLX0Iwrk_an4",
  authDomain: "infinitoai.firebaseapp.com",
  projectId: "infinitoai",
  storageBucket: "infinitoai.appspot.com",
  messagingSenderId: "1073628388155",
  appId: "1:1073628388155:web:4f83be0b7f6c41ad0cb51e",
  measurementId: "G-9558TMSP3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);