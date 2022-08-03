import { RecipeSearch } from "../../components/recipe-search/recipe-search";
import { Link } from "react-router-dom";

export const RecipePage = () => {
  return (
    <div>
      <RecipeSearch />
      <Link to={"/contact"}>
        <h3>Contact</h3>
      </Link>
    </div>
  );
};
