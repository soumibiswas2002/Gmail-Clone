// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1IlUzGUAMjW61Hu4bx1Q4IvzYmJR8Ejs",
  authDomain: "clone-21d2c.firebaseapp.com",
  projectId: "clone-21d2c",
  storageBucket: "clone-21d2c.appspot.com",
  messagingSenderId: "194908564103",
  appId: "1:194908564103:web:94ab0f16198809dfb36622",
  measurementId: "G-F7R8BJHX0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();