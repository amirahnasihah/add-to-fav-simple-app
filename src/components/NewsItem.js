import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function DatasItem({ news, updateMyFavorites }) {
  const { name, description, title, urlToImage, publishedAt, url } = news;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "plum" }} aria-label="avatar">
            {name.charAt(0)}
          </Avatar>
        }
        title={title.slice(0, 19)}
        subheader={new Date(publishedAt).toLocaleDateString("en-MY")}
      />
      <CardMedia component="img" image={urlToImage} alt={title} />
      <CardContent sx={{ height: 100 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "auto",
            maxHeight: "100px",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => updateMyFavorites(news)}
          style={{ color: "red" }}
        >
          <FavoriteIcon />
        </IconButton>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          href={url}
          target="_blank"
          rel="noopener"
        >
          READ MORE
        </Button>
      </CardActions>
    </Card>
  );
}
