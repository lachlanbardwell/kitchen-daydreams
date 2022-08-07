import axios from "axios";
import { useEffect, useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import { CircularProgress } from "@material-ui/core";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import { RecipeDisplay } from "../recipe-display/recipe-display";
import { RecipeDetail } from "../recipe-detail/recipe-detail";
import { RecipeFilter } from "../recipe-filter/recipe-filter";
import "./recipe-search.css";
import { RecipeSort } from "../recipe-sort/recipe-sort";

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
  const [favouritedRecipes, setFavouritedRecipes] = useState([]);
  const [recipeDetailFav, setRecipeDetailFav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState({
    empty: false,
    invalid: false,
    api: false,
  });

  //Works but flashes error still on longer calls and settimeout not ideal?
  //needs a ref to not load on intial
  // useEffect(() => {
  //   recipes.length === 0
  //     ? setTimeout(() => setSearchError({ invalid: true }), 1000)
  //     : setSearchError({ invalid: false });
  // }, [recipes.length]);

  useEffect(() => {
    favouritedRecipes.includes(selectedRecipe)
      ? setRecipeDetailFav(true)
      : setRecipeDetailFav(false);
  }, [selectedRecipe, favouritedRecipes]);

  const addFavouriteRecipe = (recipe) => {
    !favouritedRecipes.includes(recipe) &&
      setFavouritedRecipes((prev) => [...prev, recipe]);
    setRecipeDetailFav(true);
  };

  const removeFavouriteRecipe = (recipe) => {
    setFavouritedRecipes((prev) => prev.filter((match) => match !== recipe));
    setRecipeDetailFav(false);
  };

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
        setRecipes(response.data.hits.map((next) => next.recipe));
        setLoading(false);
      })
      // // Still janky
      // .then(() =>
      //   recipes.length === 0
      //     ? setSearchError({ invalid: true })
      //     : setSearchError({ invalid: false })
      // )
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setSearchError({ fetch: true });
      });
  };

  return (
    <div className="main-container">
      <div className="recipe-search">
        <TextField
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
        </Button>{" "}
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
          style={{ marginLeft: "50%", color: "black" }}
        />
      )}
      {recipes.length !== 0 && (
        <div className="recipe-sort-display">
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
          addFavouriteRecipe={(recipe) => addFavouriteRecipe(recipe)}
          removeFavouriteRecipe={(recipe) => removeFavouriteRecipe(recipe)}
        />
      )}
    </div>
  );
};
