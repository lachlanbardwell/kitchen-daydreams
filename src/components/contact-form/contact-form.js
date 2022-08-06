import { TextField, Button } from "@mui/material";
import { useState } from "react";

export const ContactForm = () => {
  const [feedback, setFeedback] = useState("");

  const sendFeedback = () => {
    window.open(
      `mailto:lachbardwell@gmail.com?subject=Kitchen-Daydreams Feedback&body=${feedback}`
    );
  };

  return (
    <div>
      <TextField
        type="text"
        placeholder="Send us an email"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></TextField>
      <Button onClick={sendFeedback}>Submit</Button>
    </div>
  );
};
