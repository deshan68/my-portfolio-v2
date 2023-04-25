import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GOOGLE_FIREBASE_API_KEY } from "../../environment";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: GOOGLE_FIREBASE_API_KEY,
  authDomain: "my-portfolio-db-4f84e.firebaseapp.com",
  projectId: "my-portfolio-db-4f84e",
  storageBucket: "my-portfolio-db-4f84e.appspot.com",
  messagingSenderId: "661041310801",
  appId: "1:661041310801:web:8d6b177c5e6b92f87c1c70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googlePrivider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
