import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdyaPErv3GhvRAmtMZGoi1TQ3YoTaxcXA",
  authDomain: "letstalk-4ba7f.firebaseapp.com",
  projectId: "letstalk-4ba7f",
  storageBucket: "letstalk-4ba7f.appspot.com",
  messagingSenderId: "1072703230379",
  appId: "1:1072703230379:web:c5919d01aa859452ee82ee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
