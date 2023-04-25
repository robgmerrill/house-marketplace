import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS-XSGlV7P-GbdHzHOwuvBmRmCF1E_K8Q",
  authDomain: "house-marketplace-app-752d8.firebaseapp.com",
  projectId: "house-marketplace-app-752d8",
  storageBucket: "house-marketplace-app-752d8.appspot.com",
  messagingSenderId: "699144801550",
  appId: "1:699144801550:web:f5861d24bdc6d31eaddb5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()