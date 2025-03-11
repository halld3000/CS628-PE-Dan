import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://curly-cod-vp49jg66qjgcp7p7-5050.app.github.dev/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
