// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDkhfyYJHDP-M7C3iGo2ll1o30UoloWnhY",
  authDomain: "wake-n-bake-react.firebaseapp.com",
  projectId: "wake-n-bake-react",
  storageBucket: "wake-n-bake-react.firebasestorage.app",
  messagingSenderId: "773390963838",
  appId: "1:773390963838:web:078f19116b68c3ca04342f",
  measurementId: "G-5WNLTRDV52",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
