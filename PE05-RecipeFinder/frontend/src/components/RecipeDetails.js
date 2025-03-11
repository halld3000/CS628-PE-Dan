import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://curly-cod-vp49jg66qjgcp7p7-5050.app.github.dev/recipes${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    fetch(`https://curly-cod-vp49jg66qjgcp7p7-5050.app.github.dev/recipes/${id}`, { method: "DELETE" })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return recipe ? (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default RecipeDetails;
