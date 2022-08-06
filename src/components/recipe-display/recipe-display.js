import { Grid, Alert } from "@mui/material";
import "./recipe-display.css";

export const RecipeDisplay = (props) => {
  const checkVegan = (array) => {
    return array.find((match) => match === "Vegan") ? true : false;
  };
  const checkVegetarian = (array) => {
    return array.find((match) => match === "Vegetarian") ? true : false;
  };

  return (
    <div className="recipe-container">
      {props.recipes &&
        props.recipes.map((next) => {
          return (
            <Grid
              container
              spacing={2}
              columnSpacing={8}
              border="solid 1px black"
              padding="30px"
              // onMouseEnter={() => console.log("here")}
              // onMouseLeave={() => console.log("leave")}
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
                <p>Calories: {Math.round(next.calories)}</p>{" "}
              </Grid>
              <Grid item xs={6}>
                <img
                  src={next.image}
                  alt="individual recipe"
                  width="80%"
                  height="80%"
                ></img>
              </Grid>
            </Grid>
          );
        })}
    </div>
  );
};
