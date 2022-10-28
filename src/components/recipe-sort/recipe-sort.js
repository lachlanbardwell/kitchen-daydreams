import { ButtonGroup, Button, Stack } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { yellow } from "@mui/material/colors";
import { Link } from "react-router-dom";
import "./recipe-sort.css";

export const RecipeSort = (props) => {
  const sortAlpha = () => {
    //Clone array so that setState updates
    return [...props.recipes].sort((first, second) =>
      first.label > second.label ? 1 : -1
    );
  };

  const sortTime = () => {
    return [...props.recipes].sort((first, second) =>
      first.totalTime > second.totalTime ? 1 : -1
    );
  };

  const sortCals = () => {
    return [...props.recipes].sort((first, second) =>
      first.calories > second.calories ? 1 : -1
    );
  };
  return (
    <div className="recipe-sort">
      <Stack>
        <SortIcon fontSize="large" />
        <ButtonGroup
          color="success"
          variant="text"
          aria-label="text button group"
        >
          <Button
            color="success"
            onClick={() => {
              props.setRecipes(sortAlpha());
            }}
          >
            Alphabetically&nbsp;
          </Button>
          <Button
            color="success"
            onClick={() => {
              props.setRecipes(sortTime());
            }}
          >
            Time to make
          </Button>
          <Button
            color="success"
            onClick={() => {
              props.setRecipes(sortCals());
            }}
          >
            Total calories
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <StarRoundedIcon
          sx={{ color: yellow[500], fontSize: 40, textAlign: "center" }}
        />
        <Link
          to={"/favourites"}
          style={{
            color: "black",
            justifyContent: "flex-end",
            textDecoration: "none",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Favourited Recipes </h3>
        </Link>
      </Stack>
    </div>
  );
};
