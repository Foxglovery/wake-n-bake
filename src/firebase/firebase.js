import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDivNnSTZ6qnYdvJUcF1Mc9wfsGLDMgqg0",
  authDomain: "wake-n-bake-8ba79.firebaseapp.com",
  databaseURL: "https://wake-n-bake-8ba79-default-rtdb.firebaseio.com",
  projectId: "wake-n-bake-8ba79",
  storageBucket: "wake-n-bake-8ba79.firebasestorage.app",
  messagingSenderId: "793211320445",
  appId: "1:793211320445:web:7b0078349244ca538ad914",
  measurementId: "G-99SPJ7V66T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Writing a new recipe log to the database
export const writeRecipeLog = (
  recipeId,
  dateMade,
  dosages,
  employeeId,
  recipeName
) => {
  set(ref(database, "recipeLogs/" + recipeId), {
    dateMade,
    dosages,
    employeeId,
    name: recipeName,
    recipeId,
  });
};

// Example usage:
writeRecipeLog(
  "recipeId1",
  "2025-01-01",
  {
    employeeId: 1,
    quantity: 150,
  },
  1,
  "Chocolate Chip Cookies"
);

// Reading a specific recipe log
export const readRecipeLog = (recipeId, callback) => {
  const recipeRef = ref(database, "recipeLogs/" + recipeId);
  onValue(recipeRef, (snapshot) => {
    const data = snapshot.val();
    callback(data); // Pass data to callback
  });
};

// // Read data from the database
// export const readData = (userId, callback) => {
//   const userRef = ref(database, "users/" + userId);
//   onValue(userRef, (snapshot) => {
//     const data = snapshot.val();
//     callback(data); // Pass data to callback
//   });
// };
