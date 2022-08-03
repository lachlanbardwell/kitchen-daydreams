import "./not-found-page.css";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>Page not found</h1>
      <h3>Something went wrong. Please check the url and try again.</h3>
      <Link to={"/recipes"}>
        <h3>Search for another recipe</h3>
      </Link>
    </div>
  );
};
