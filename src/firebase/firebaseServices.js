// firebaseService.js
import { ref, set, push, update, onValue, remove } from "firebase/database";
import { db } from "./firebase";

// Add a Recipe
export const addRecipe = (recipe) => {
  const recipeRef = push(ref(db, "recipeLogs"));
  return set(recipeRef, {
    recipeId: recipeRef.key,
    ...recipe,
  });
};

// Fetch Recipes
export const fetchRecipes = (callback) => {
  const recipeRef = ref(db, "recipeLogs");
  onValue(recipeRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};

// Update a Recipe
export const updateRecipe = (recipeId, updatedFields) => {
  const recipeRef = ref(db, `recipeLogs/${recipeId}`);
  return update(recipeRef, updatedFields);
};

// Delete a Recipe
export const deleteRecipe = (recipeId) => {
  const recipeRef = ref(db, `recipeLogs/${recipeId}`);
  return remove(recipeRef);
};
