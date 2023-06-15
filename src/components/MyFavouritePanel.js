import { Box, Button, Grid, Typography } from "@mui/material";

export default function FavPanel({
  handleSetKeyword,
  myFavorites,
  clearMyFavorites,
}) {
  return (
    <Grid item>
      <Typography variant="h6">My Favourite: {myFavorites.length}</Typography>

      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={clearMyFavorites}
      >
        CLEAR
      </Button>
      <Box>
        <div>
          {myFavorites
            .filter((item) => item)
            .map((item) => (
              <div
                key={item.id}
                style={{
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  onClick={() => handleSetKeyword}
                >
                  {item.title}
                </a>
              </div>
            ))}
        </div>
        <hr />
      </Box>
    </Grid>
  );
}
