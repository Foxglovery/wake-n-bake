import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../firebase/firebaseServices";


const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes((data) => {
      if (data) {
        const recipeArray = Object.values(data);
        setRecipes(recipeArray);
      }
    });
  }, []);

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.recipeId}>
          {recipe.name} - {recipe.dateMade}
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
