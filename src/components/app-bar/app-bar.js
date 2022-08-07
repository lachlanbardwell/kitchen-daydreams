import { AppBar, Box, Stack, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Play, sans-serif",
          }}
        >
          <h3 style={{ marginLeft: "2%" }}>
            <a href="/#">Lachieb.dev</a>
          </h3>

          <Link
            to={"/"}
            style={{
              color: "black",
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <h2 style={{ marginLeft: "7%" }}>Kitchen Daydreams</h2>
          </Link>

          <Stack direction="row">
            <Link
              to={"/recipes"}
              style={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <h3>Search Recipes |</h3>
            </Link>
            <Link
              to={"/favourites"}
              style={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <h3>&nbsp;Favourites |</h3>
            </Link>

            <Link
              to={"/contact"}
              style={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <h3>&nbsp;Contact</h3>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
