import axios from "axios";
import { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import { CircularProgress } from "@material-ui/core";
import { RecipeDisplay } from "../recipe-display/recipe-display";
import { RecipeDetail } from "../recipe-detail/recipe-detail";
import { RecipeFilter } from "../recipe-filter/recipe-filter";
import "./recipe-search.css";

const EDAMAM_API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

export const RecipeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthFilter, setHealthFilter] = useState([""]);
  const [checkedState, setCheckedState] = useState({
    vegan: false,
    vegetarian: false,
    "dairy-free": false,
    "gluten-free": false,
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState({
    empty: false,
    invalid: false,
    api: false,
  });

  const getRecipes = () => {
    if (!searchTerm) {
      setSearchError({ empty: true });
      return;
    }
    setSearchError({ empty: false });
    setLoading(true);
    setRecipes([]);
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=a24fefc8&app_key=${EDAMAM_API_KEY}${healthFilter.join(
      ""
    )}`;
    axios
      .get(url)
      .then((response) => {
        setRecipes(response.data.hits.map((next) => next.recipe));
        setLoading(false);
        //TODO: Error handle janky
        !recipes.length && setSearchError({ invalid: true });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setSearchError({ fetch: true });
      });
  };

  return (
    <div>
      <div className="recipe-search">
        <TextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="What would you like to make?"
        ></TextField>
        <Button onClick={getRecipes} variant="contained">
          Search
        </Button>{" "}
        <RecipeFilter
          checkedState={checkedState}
          setCheckedState={setCheckedState}
          healthFilter={healthFilter}
          setHealthFilter={setHealthFilter}
        />
      </div>
      {searchError.empty && (
        <Alert severity="error">Enter an item to search</Alert>
      )}
      {searchError.invalid && (
        <Alert severity="error">
          Could not find any recipes with that name
        </Alert>
      )}
      {searchError.fetch && (
        <Alert severity="error">There was a problem retrieving data.</Alert>
      )}

      {loading ? (
        <CircularProgress
          size={60}
          style={{ marginTop: "5%", marginLeft: "50%", color: "black" }}
        />
      ) : (
        <RecipeDisplay
          recipes={recipes}
          selectedRecipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
        />
      )}

      {selectedRecipe && <RecipeDetail selectedRecipe={selectedRecipe} />}
    </div>
  );
};
