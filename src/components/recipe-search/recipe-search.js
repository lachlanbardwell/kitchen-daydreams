import axios from "axios";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { RecipeDisplay } from "../recipe-display/recipe-display";
import { RecipeDetail } from "../recipe-detail/recipe-detail";
import "./recipe-search.css";

const EDAMAM_API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

export const RecipeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getRecipes = () => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=a24fefc8&app_key=${EDAMAM_API_KEY}`;
    axios
      .get(url)
      .then((response) => {
        setRecipes(response.data.hits.map((next) => next.recipe));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="recipe-search">
        <TextField
          value={searchTerm}
          onChange={handleChange}
          placeholder="What would you like to make?"
        ></TextField>
        <Button onClick={getRecipes} variant="contained">
          Search
        </Button>{" "}
      </div>
      <RecipeDisplay
        recipes={recipes}
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
      />

      {selectedRecipe && <RecipeDetail selectedRecipe={selectedRecipe} />}
    </div>
  );
};
