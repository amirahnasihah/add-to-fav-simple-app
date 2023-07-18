import { Typography, Link } from "@mui/material";
import icon from "../assets/icon.png";

function Footer() {
  return (
    <footer>
      <img style={{ width: 50 }} src={icon} alt="icon ketupat" />

      <Typography variant="h6">Start creating to see some magic!</Typography>

      <Typography variant="caption">
        amirahnasihah || source code on{" "}
        <Link
          href="https://github.com/amirahnasihah/add-to-fav-simple-app"
          title="GitHub Add To Fav Mock Api"
          target="_blank"
          style={{ color: "green", textDecorationLine: "none" }}
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </Typography>
    </footer>
  );
}

export default Footer;
