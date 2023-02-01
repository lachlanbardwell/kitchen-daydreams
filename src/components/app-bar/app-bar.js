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
import "./app-bar.css";

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
            padding: "0 10px",
            justifyContent: "space-between",
            fontFamily: "Play, sans-serif",
          }}
        >
          <Stack direction="row" className="recipe-nav">
            <Link to={"/recipes"} style={linkItem}>
              <h3>Search&nbsp;|&nbsp;</h3>
            </Link>
            <Link to={"/favourites"} style={linkItem}>
              <h3>Favourites&nbsp;|</h3>
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
              marginLeft: "5%",
            }}
          >
            <h2 className="app-title">Kitchen Daydreams</h2>
          </Link>
          <div style={{ display: "flex" }}>
            <a
              href="https://lachieb.dev"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h4 className="other-links">LachieB.dev</h4>
            </a>
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
                <a
                  href="https://quackle.net"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>Quackle</MenuItem>
                </a>
                <a
                  href="https://shoppinglist.lachieb.dev"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>Shopping List</MenuItem>
                </a>
                <a
                  href="https://xando.lachieb.dev"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>Naughts and Crosses</MenuItem>
                </a>
                <a
                  href="https://kitchen.lachieb.dev"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>Kitchen Daydreams</MenuItem>
                </a>
              </Menu>
              <DoubleArrowIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
