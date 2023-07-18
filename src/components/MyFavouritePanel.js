import {
  Badge,
  Box,
  Button,
  Divider,
  Tooltip,
  Typography,
} from "@mui/material";

export default function MyFavouritePanel({
  handleSetKeyword,
  myFavorites,
  clearMyFavorites,
}) {
  return (
    <Box sx={{ p: 2 }}>
      <Badge
        badgeContent={myFavorites.length}
        color="secondary"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography variant="h5" gutterBottom>
          My Favorites
        </Typography>
      </Badge>

      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={clearMyFavorites}
        sx={{ m: 2 }}
      >
        Clear
      </Button>
      <Box sx={{ maxHeight: "calc(100vh - 330px)" }}>
        {myFavorites.map((item, index) => (
          <Tooltip title="Read" placement="right-end" key={index}>
            <Box>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                onClick={handleSetKeyword}
              >
                <Typography variant="caption">
                  <span role="img" aria-label="emoji">
                    👉
                  </span>
                  {item.title}
                </Typography>
              </a>
              <Divider />
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}
