import facebook from "../../images/facebook-black.svg";
import instagram from "../../images/instagram-black.svg";
import linkedin from "../../images/linkedin-black.svg";
import twitter from "../../images/twitter-black.svg";
import youtube from "../../images/youtube-black.svg";
import { Stack } from "@mui/material";
import "./footer.css";

const socialImages = [facebook, instagram, linkedin, twitter, youtube];

export const Footer = () => {
  return (
    <footer>
      <nav className="social">
        <Stack
          direction="row"
          style={{
            padding: "2%",
            justifyContent: "center",
          }}
        >
          {socialImages.map((next, ind) => (
            <li key={ind} style={{ listStyleType: "none" }}>
              <a
                href={
                  next === linkedin
                    ? "https://www.linkedin.com/in/lachlan-bardwell"
                    : "/#"
                }
              >
                <img
                  src={next}
                  alt={`Contact me on ${next}`}
                  style={{
                    width: "40%",
                    height: "40%",
                    padding: "10px",
                  }}
                />
              </a>
            </li>
          ))}
        </Stack>
      </nav>
      <h4
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        &copy; Lachlan Bardwell 2022
      </h4>
    </footer>
  );
};
