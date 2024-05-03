import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import {ref,getDatabase} from "firebase/database";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_API_KEY,
//     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//     databaseURL: import.meta.env.VITE_DB_NAME,
//     projectId: import.meta.env.VITE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
//     appId: import.meta.env.VITE_APP_ID
// };
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
//   };
const firebaseConfig = {
    apiKey: "AIzaSyAQjlwhuwWYJ-OdhhPP4XRxEgWSfQ5d3-o",
    authDomain: "ali-raza-518df.firebaseapp.com",
    databaseURL: "https://ali-raza-518df-default-rtdb.firebaseio.com",
    projectId: "ali-raza-518df",
    storageBucket: "ali-raza-518df.appspot.com",
    messagingSenderId: "308309137877",
    appId: "1:308309137877:web:ac0be37dd3c2bb9544055c",
    measurementId: "G-82NM2JZS9D"
  };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const imageDb = getStorage(app)

export { app, db, auth, imageDb,ref };
