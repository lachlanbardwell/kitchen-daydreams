import { Stack, Grid, Button } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { useContext } from "react";
import { FavContext } from "../../context";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import IcecreamIcon from "@mui/icons-material/Icecream";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CloseIcon from "@mui/icons-material/Close";
import "./recipe-detail.css";

export const RecipeDetail = (props) => {
  const { addFavouriteRecipe, removeFavouriteRecipe } = useContext(FavContext);
  return (
    <div
      className="recipe-detail-modal"
      onClick={() => {
        props.setSelectedRecipe(null);
      }}
    >
      <Stack
        spacing={2}
        style={{
          backgroundColor: "white",
          border: "solid 1px black",
          borderRadius: "10px",
          padding: "20px",
          width: "75%",
          height: "75%",
        }}
        alignItems="center"
        // Prevent the above onclick from affecting the inside modal content
        onClick={(e) => e.stopPropagation()}
      >
        <Stack direction="row" spacing={2} style={{ alignItems: "center" }}>
          <h2>{props.selectedRecipe.label}</h2>
          {props.selectedRecipe.totalTime !== 0 ? (
            <span style={{ display: "flex" }}>
              <AccessTimeRoundedIcon
                style={{ alignItems: "center", marginRight: "5px" }}
              />
              {props.selectedRecipe.totalTime} minutes
            </span>
          ) : (
            <span style={{ display: "flex" }}>
              <AccessTimeRoundedIcon
                style={{ alignItems: "center", marginRight: "5px" }}
              />
              Cooking time unavailable
            </span>
          )}
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          style={{ width: "50%", alignItems: "center" }}
        >
          <img
            src={props.selectedRecipe.image}
            alt="individual recipe"
            width="150"
            height="150"
          ></img>
          <Stack style={{ marginLeft: "50%" }}>
            {!props.recipeDetailFav ? (
              <Button onClick={() => addFavouriteRecipe(props.selectedRecipe)}>
                <StarBorderRoundedIcon sx={{ color: "black", fontSize: 80 }} />
              </Button>
            ) : (
              <Button
                onClick={() => removeFavouriteRecipe(props.selectedRecipe)}
              >
                <StarRoundedIcon sx={{ color: yellow[500], fontSize: 80 }} />
              </Button>
            )}
          </Stack>
        </Stack>
        <HorizontalRuleRoundedIcon
          color="success"
          preserveAspectRatio="none"
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "100%",
          }}
        />
        <Grid container spacing={2} style={{ margin: "0 0 0 20%" }}>
          <Grid item xs={6}>
            <h3>Ingredients ({props.selectedRecipe.yield} Servings): </h3>
            <div style={{ columns: "2 auto", lineHeight: 0.9 }}>
              {props.selectedRecipe.ingredients.map((next, i) => (
                <p key={i}>{next.text}</p>
              ))}
            </div>
          </Grid>
          <Grid item xs={6}>
            <h3>Nutrients:</h3>
            <h4 style={{ alignItems: "center" }}>
              <FitnessCenterIcon />
              {Math.round(props.selectedRecipe.totalNutrients.PROCNT.quantity)}
              grams
            </h4>
            <h4>
              <RamenDiningIcon />
              {Math.round(
                props.selectedRecipe.totalNutrients.ENERC_KCAL.quantity
              )}
              kcal (
              {Math.round(
                props.selectedRecipe.totalNutrients.ENERC_KCAL.quantity * 4.184
              )}
              kj)
            </h4>
            <h4>
              <AccessibilityIcon />
              {Math.round(props.selectedRecipe.totalNutrients.FAT.quantity)}
              grams
            </h4>
            <h4>
              <IcecreamIcon />
              {Math.round(props.selectedRecipe.totalNutrients.SUGAR.quantity)}
              grams
            </h4>
            <br />
            <Button
              sx={{
                color: "white",
                backgroundColor: "#011a07",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
              variant="contained"
              onClick={() => window.open(props.selectedRecipe.url)}
            >
              See website for instructions
            </Button>
          </Grid>
        </Grid>
        <Button
          sx={{ color: "black" }}
          onClick={() => {
            props.setSelectedRecipe(null);
          }}
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          Click anywhere to close
          <CloseIcon />
        </Button>
      </Stack>
    </div>
  );
};
