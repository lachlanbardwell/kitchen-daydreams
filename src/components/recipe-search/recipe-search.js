import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import { CircularProgress } from "@material-ui/core";
import { RecipeDisplay } from "../recipe-display/recipe-display";
import { RecipeDetail } from "../recipe-detail/recipe-detail";
import { RecipeFilter } from "../recipe-filter/recipe-filter";
import { RecipeSort } from "../recipe-sort/recipe-sort";
import { FavContext } from "../../context";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
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
  const [recipeDetailFav, setRecipeDetailFav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState({
    empty: false,
    invalid: false,
    api: false,
  });
  const { favouritedRecipes } = useContext(FavContext);

  useEffect(() => {
    favouritedRecipes.includes(selectedRecipe)
      ? setRecipeDetailFav(true)
      : setRecipeDetailFav(false);
  }, [selectedRecipe, favouritedRecipes]);

  const getRecipes = () => {
    if (!searchTerm) {
      setSearchError({ empty: true });
      return;
    }
    setSearchError({ empty: false });
    setSearchError({ invalid: false });
    setSearchError({ api: false });
    setLoading(true);
    setRecipes([]);
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=a24fefc8&app_key=${EDAMAM_API_KEY}${healthFilter.join(
      ""
    )}`;
    axios
      .get(url)
      .then((response) => {
        let results = response.data.hits.map((next) => next.recipe);
        setRecipes(results);
        setLoading(false);
        results.length === 0
          ? setSearchError({ invalid: true })
          : setSearchError({ invalid: false });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setSearchError({ fetch: true });
      });
  };

  return (
    <div className="main-container" data-testid="search-container">
      <div className="recipe-search">
        <TextField
          inputProps={{ "data-testid": "input-search" }}
          color="success"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="What would you like to make?"
        ></TextField>
        <Button
          sx={{
            color: "white",
            backgroundColor: "#011a07",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
          onClick={getRecipes}
          variant="contained"
        >
          Search
        </Button>
        <RecipeFilter
          checkedState={checkedState}
          setCheckedState={setCheckedState}
          healthFilter={healthFilter}
          setHealthFilter={setHealthFilter}
        />
        <HorizontalRuleRoundedIcon
          color="success"
          preserveAspectRatio="none"
          style={{
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
            width: "100%",
          }}
        />
      </div>
      {searchError.empty && (
        <Alert severity="error" style={{ margin: "0 20% 0 20%" }}>
          Enter an item to search
        </Alert>
      )}
      {searchError.invalid && !loading && (
        <Alert severity="error" style={{ margin: "0 20% 0 20%" }}>
          Could not find any recipes with that name
        </Alert>
      )}
      {searchError.fetch && !loading && (
        <Alert severity="error" style={{ margin: "0 20% 0 20%" }}>
          There was a problem retrieving data.
        </Alert>
      )}

      {loading && (
        <CircularProgress
          size={60}
          style={{ marginLeft: "48%", color: "black" }}
        />
      )}
      {recipes.length !== 0 && (
        <div className="recipe-sort-display" data-testid="search-display">
          <RecipeSort recipes={recipes} setRecipes={setRecipes} />
          <RecipeDisplay
            recipes={recipes}
            selectedRecipe={selectedRecipe}
            setSelectedRecipe={setSelectedRecipe}
          />
        </div>
      )}
      {selectedRecipe && (
        <RecipeDetail
          selectedRecipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
          recipeDetailFav={recipeDetailFav}
          setRecipeDetailFav={setRecipeDetailFav}
        />
      )}
    </div>
  );
};
