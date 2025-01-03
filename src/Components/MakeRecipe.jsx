import React, { useState } from "react";
import { addRecipe } from "../firebase/firebaseServices";


const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    dateMade: "",
    quantity: 0,
    dosages: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleDosageChange = (index, field, value) => {
    const updatedDosages = [...recipe.dosages];
    updatedDosages[index] = { ...updatedDosages[index], [field]: value };
    setRecipe({ ...recipe, dosages: updatedDosages });
  };

  const addDosage = () => {
    setRecipe({
      ...recipe,
      dosages: [...recipe.dosages, { type: "", amount: 0 }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe)
      .then(() => alert("Recipe added successfully!"))
      .catch((error) => console.error("Error adding recipe:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Recipe Name" onChange={handleChange} />
      <input name="dateMade" type="date" onChange={handleChange} />
      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        onChange={handleChange}
      />

      {recipe.dosages.map((dosage, index) => (
        <div key={index}>
          <input
            placeholder="Type (e.g., D9, CBD)"
            value={dosage.type}
            onChange={(e) => handleDosageChange(index, "type", e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={dosage.amount}
            onChange={(e) =>
              handleDosageChange(index, "amount", e.target.value)
            }
          />
        </div>
      ))}
      <button type="button" onClick={addDosage}>
        Add Dosage
      </button>
      <button type="submit">Save Recipe</button>
    </form>
  );
};

export default AddRecipe;
