import { Link } from "react-router-dom";
import "./home-page.css";

export const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <h1>Lachlan's Kitchen Daydreams</h1>
      </div>
      <h2>
        Recipes from <i>successful</i> restaurants
      </h2>
      <Link to={"/recipes"}>
        <h2>Click here to search for a recipe</h2>
      </Link>
      <div className="home-footer">
        <p>&copy; Lachlan Bardwell 2022</p>
      </div>
    </div>
  );
};
