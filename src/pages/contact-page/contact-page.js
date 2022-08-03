import { ContactForm } from "../../components/contact-form/contact-form";
import { Link } from "react-router-dom";

export const ContactPage = () => {
  return (
    <div>
      <h1>Did you find the recipe you were looking for?</h1>
      <ContactForm />
      <Link to={"/recipes"}>
        <h3>Search for another recipe</h3>
      </Link>
    </div>
  );
};
