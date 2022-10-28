import { Link } from "react-router-dom";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import "./home-page.css";

export const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <h1>Kitchen Daydreams</h1>
      </div>
      <h3>
        Recipes from <i>successful</i> restaurants
      </h3>
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
      <Link
        to={"/recipes"}
        style={{
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        <h2>Search for a recipe</h2>
      </Link>
    </div>
  );
};
