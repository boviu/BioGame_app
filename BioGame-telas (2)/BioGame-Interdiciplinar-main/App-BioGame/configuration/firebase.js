// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-CdfoEn263EwHganuDcdIJ2r2Zkn-0mI",
  authDomain: "app-biogame.firebaseapp.com",
  projectId: "app-biogame",
  storageBucket: "app-biogame.firebasestorage.app",
  messagingSenderId: "94845922342",
  appId: "1:94845922342:web:d45317f41e5d01bf4c0ae7",
  measurementId: "G-V1ZLNPPBKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth(app)
export const db = getFirestore(app)
