import { Grid, Alert } from "@mui/material";
import BlenderRoundedIcon from "@mui/icons-material/BlenderRounded";
import "./recipe-display.css";

export const RecipeDisplay = (props) => {
  const checkVegan = (array) => {
    return array.find((match) => match === "Vegan") ? true : false;
  };
  const checkVegetarian = (array) => {
    return array.find((match) => match === "Vegetarian") ? true : false;
  };

  const hoverStyles = {
    "&:hover": {
      cursor: "pointer",
      background: "#f0f0f0",
      borderRadius: "15px",
      transition: ".5s",
    },
  };

  return (
    <div className="recipe-container">
      {props.recipes &&
        props.recipes.map((next) => (
          <Grid
            container
            spacing={2}
            columnSpacing={8}
            sx={hoverStyles}
            key={next.uri}
            onClick={() => props.setSelectedRecipe(next)}
          >
            <Grid item xs={6}>
              <h2>{next.label}</h2>
              {checkVegan(next.healthLabels) && (
                <Alert severity="success">Vegan friendly!</Alert>
              )}
              {checkVegetarian(next.healthLabels) && (
                <Alert severity="success">Vegetarian friendly!</Alert>
              )}
              <h4>{next.dietLabels[0]}</h4>
              {next.totalTime !== 0 && (
                <h4>Time to make: {next.totalTime} minutes</h4>
              )}
              <p>
                Energy: {Math.round(next.calories)} kcal (
                {Math.round(next.calories * 4.184)}kj)
              </p>
              <BlenderRoundedIcon />
            </Grid>
            <Grid item xs={6}>
              <img
                src={next.image}
                style={{ objectFit: "contain" }}
                alt="individual recipe"
                width="80%"
                height="80%"
              ></img>
            </Grid>
          </Grid>
        ))}
    </div>
  );
};
