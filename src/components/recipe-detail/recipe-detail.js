import { Stack } from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
// import StarRoundedIcon from "@mui/icons-material/StarRounded";

export const RecipeDetail = (props) => {
  return (
    <div className="recipe-detail-modal">
      <Stack spacing={2} alignItems="center">
        <Stack direction="row" spacing={2} style={{ alignItems: "center" }}>
          <h2>{props.selectedRecipe.label}</h2>
          {props.selectedRecipe.totalTime !== 0 && (
            <span style={{ display: "flex" }}>
              {" "}
              <AccessTimeRoundedIcon
                style={{ alignItems: "center", marginRight: "5px" }}
              />
              {props.selectedRecipe.totalTime} minutes
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
          <StarBorderRoundedIcon style={{ marginLeft: "auto" }} />
        </Stack>
        <h3>Ingredients : </h3>
        {props.selectedRecipe.ingredients.map((next, i) => (
          <h4 key={i}>{next.text}</h4>
        ))}
      </Stack>
    </div>
  );
};
