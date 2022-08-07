import { Stack } from "@mui/material";
import { FavouritesList } from "../../components/recipe-favourites/recipe-favourites";

export const FavouritesPage = () => {
  return (
    <Stack>
      <h1>Gordon Ramsay Approved:</h1>
      <FavouritesList />
    </Stack>
  );
};
