import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

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
        title={title.slice(0, 20)}
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
            cursor: "default",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Add to fav" placement="top">
          <IconButton
            style={{ color: "purple" }}
            aria-label="add to favorites"
            onClick={() => updateMyFavorites(news)}
          >
            <AddCircleRoundedIcon />
          </IconButton>
        </Tooltip>
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
