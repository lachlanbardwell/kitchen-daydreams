import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrowSharp";
import { useState } from "react";
import { Link } from "react-router-dom";

export const TopBar = () => {
  const [visible, setVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    visible ? setVisible(false) : setVisible(true);
  };

  const linkItem = {
    color: "black",
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
  };

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
          <Stack direction="row">
            <Link to={"/recipes"} style={linkItem}>
              <h3>Search Recipes |</h3>
            </Link>
            <Link to={"/favourites"} style={linkItem}>
              <h3>&nbsp;Favourites |</h3>
            </Link>

            <Link to={"/contact"} style={linkItem}>
              <h3>&nbsp;Contact</h3>
            </Link>
          </Stack>
          <Link
            to={"/"}
            style={{
              color: "black",
              textDecoration: "none",
              marginRight: "14%",
            }}
          >
            <h2>Kitchen Daydreams</h2>
          </Link>
          <div style={{ display: "flex" }}>
            <h4 style={{ color: "##2b2b2b" }}>Other projects</h4>
            <IconButton
              id="anchor"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={visible ? "true" : undefined}
              onClick={handleClick}
            >
              <Menu
                anchorEl={anchorEl}
                open={visible}
                onClose={() => setVisible(false)}
                style={{ padding: 20 }}
              >
                <MenuItem
                  onClick={() =>
                    window.open("https://shoppinglist.lachieb.dev")
                  }
                >
                  Shopping List
                </MenuItem>
                <MenuItem
                  onClick={() => window.open("https://xando.lachieb.dev")}
                >
                  Naughts and Crosses
                </MenuItem>
                <MenuItem>
                  <Link
                    to={"/"}
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Kitchen Daydreams
                  </Link>
                </MenuItem>
              </Menu>
              <DoubleArrowIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
