import { Link } from "react-router-dom";
import Ramsay from "../../images/Ramsay.webp";
import "./not-found-page.css";

export const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>Page not found</h1>
        <h3>Something went wrong. Please check the url and try again.</h3>
        <img src={Ramsay} alt="its raw" height="60%" width="60%"></img>
        <Link
          to={"/recipes"}
          style={{
            color: "black",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <h3>Search for another recipe</h3>
        </Link>
      </div>
    </div>
  );
};
