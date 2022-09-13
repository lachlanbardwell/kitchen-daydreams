import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useContext, useState } from "react";
import { FavContext } from "../../context";
import { RecipeDetail } from "../recipe-detail/recipe-detail";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import "./recipe-favourites.css";

export const FavouritesList = () => {
  const { favouritedRecipes, removeFavouriteRecipe } = useContext(FavContext);
  const [favClicked, setFavClicked] = useState(null);
  // const [rating, setRating] = useState()

  return (
    <div className="favourites-container">
      {favouritedRecipes && (
        <ImageList
          sx={{
            margin: "auto",
            width: 600,
            height: 550,
          }}
          cols={3}
          rowHeight={200}
        >
          {favouritedRecipes.map((item) => (
            <div key={item.uri} onClick={() => setFavClicked(item)}>
              <Tooltip title={item.label}>
                <ImageListItem
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <img src={item.image} alt={item.label} loading="lazy" />
                </ImageListItem>
              </Tooltip>
              <Tooltip title="Remove from favourites">
                <IconButton onClick={() => removeFavouriteRecipe(item)}>
                  <DeleteIcon
                    sx={{
                      color: "#011a07",
                    }}
                  />
                </IconButton>
              </Tooltip>
              {favClicked && (
                <RecipeDetail
                  selectedRecipe={favClicked}
                  setSelectedRecipe={setFavClicked}
                  recipeDetailFav={true}
                />
              )}
            </div>
          ))}
        </ImageList>
      )}
    </div>
  );
};
