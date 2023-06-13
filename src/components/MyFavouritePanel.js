import { Box, Button, Grid, Typography } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function FavPanel({ handleSetKeyword, myFav, clearMyFav }) {
  // Get favorites from local storage on component mount

  return (
    <Grid item>
      <EmojiEmotionsIcon />
      <Typography variant="body">My Favourite! </Typography>

      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={clearMyFav}
      >
        CLEAR
      </Button>
      <Box>
        <ul>
          <li>D</li>
        </ul>
        <hr />
      </Box>
    </Grid>
  );
}
