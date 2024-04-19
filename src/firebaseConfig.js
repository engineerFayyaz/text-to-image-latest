
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBZ7YNRP0zQ5ALqJtGngMYMLX0Iwrk_an4",
  authDomain: "infinitoai.firebaseapp.com",
  projectId: "infinitoai",
  storageBucket: "infinitoai.appspot.com",
  messagingSenderId: "1073628388155",
  appId: "1:1073628388155:web:4f83be0b7f6c41ad0cb51e",
  measurementId: "G-9558TMSP3W"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);
// Function to upload image to Firebase Storage
const uploadImageToStorage = async (imageFile) => {
  const storageRef = ref(storage, `images/${imageFile.name}`);
  await uploadBytes(storageRef, imageFile);
  return getDownloadURL(storageRef);
};

export { app, auth, provider, uploadImageToStorage, firestore };