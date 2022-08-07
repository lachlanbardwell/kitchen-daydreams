import { ContactForm } from "../../components/contact-form/contact-form";
import { Link } from "react-router-dom";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import "./contact-page.css";

export const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Did you find the recipe you were looking for?</h1>
      <ContactForm />
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
        <h3>Search for another recipe</h3>
      </Link>
    </div>
  );
};
