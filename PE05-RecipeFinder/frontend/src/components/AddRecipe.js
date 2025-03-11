import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const [recipe, setRecipe] = useState({ name: "", ingredients: "", instructions: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://curly-cod-vp49jg66qjgcp7p7-5050.app.github.dev/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-recipe">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Recipe Name" onChange={handleChange} required />
        <textarea name="ingredients" placeholder="Ingredients" onChange={handleChange} required />
        <textarea name="instructions" placeholder="Instructions" onChange={handleChange} required />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
