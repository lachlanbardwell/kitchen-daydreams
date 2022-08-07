import { createContext } from "react";

export const FavContext = createContext({
  //Check if any favourite recipe data in localStorage
  favouritedRecipes: localStorage.getItem("Fav Recipes")
    ? JSON.parse(localStorage.getItem("Fav Recipes"))
    : [],
  addFavouriteRecipe: () => null,
  removeFavouriteRecipe: () => null,
});
