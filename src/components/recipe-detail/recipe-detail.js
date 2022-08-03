import { Stack } from "@mui/material";

export const RecipeDetail = (props) => {
  return (
    <div>
      <Stack spacing={2} alignItems="center">
        <img
          src={props.selectedRecipe.image}
          alt="individual recipe"
          width="250"
          height="250"
        ></img>
        <h3>{props.label}</h3>
        <h3>Ingredients : </h3>
        {props.selectedRecipe.ingredients.map((next) => (
          <p>{next.text}</p>
        ))}
      </Stack>
    </div>
  );
};
