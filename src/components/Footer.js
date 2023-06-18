import { Typography, Link } from "@mui/material";
import icon from "../assets/icon.png";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

function Footer() {
  return (
    <footer>
      <img style={{ width: 50 }} src={icon} alt="icon ketupat" />

      <Typography variant="h6">Start creating to see some magic!</Typography>

      <Typography variant="caption">
        {"made by "}
        <Link
          href="http://amrhnshh-minimalist.vercel.app/"
          rel="website"
          title="Amirah Nasihah"
          target="_blank"
          style={{ color: "white", textDecorationLine: "none" }}
        >
          amirahnasihah
        </Link>
        {". source code can be accessed on "}
        <Link
          href="https://github.com/amirahnasihah/add-to-fav-simple-app"
          title="GitHub food-order-website-usereducer"
          target="_blank"
          style={{ color: "white", textDecorationLine: "none" }}
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </Typography>
    </footer>
  );
}

export default Footer;
