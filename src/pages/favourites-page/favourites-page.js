import { Stack } from "@mui/material";
import { FavouritesList } from "../../components/recipe-favourites/recipe-favourites";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";

export const FavouritesPage = () => {
  return (
    <Stack>
      <h1 style={{ margin: "5% auto 0", justifyContent: "center" }}>
        Gordon Ramsay Approved:
      </h1>
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
      <FavouritesList />
    </Stack>
  );
};
