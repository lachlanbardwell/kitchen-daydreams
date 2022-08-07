import { TextField, Button } from "@mui/material";
import { useState } from "react";
import "./contact-form.css";

export const ContactForm = () => {
  const [feedback, setFeedback] = useState("");

  const sendFeedback = () => {
    window.open(
      `mailto:lachbardwell@gmail.com?subject=Kitchen-Daydreams Feedback&body=${feedback}`
    );
  };

  return (
    <div className="contact-form-container">
      <TextField
        color="success"
        type="text"
        placeholder="Send us an email"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></TextField>
      <Button
        sx={{
          color: "white",
          backgroundColor: "#011a07",
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
        }}
        variant="contained"
        onClick={sendFeedback}
      >
        Submit
      </Button>
    </div>
  );
};
