
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
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
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider}