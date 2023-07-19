import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import api from "../api/itemsData";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";

export default function DisplayResults({
  keyword,
  page,
  updateMyFavorites,
  onLoadMore,
}) {
  // API
  const [newsData, setNewsData] = useState([]);
  // PAGINATION
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // ✅ handle searchbar data filtering - multiple properties
  const filterNewsData = newsData.filter((item) => {
    const propertiesToSearch = [item.title, item.description];
    const keywordLowerCase = keyword.toLowerCase();

    return propertiesToSearch.some((property) =>
      property.toLowerCase().includes(keywordLowerCase)
    );
  });

  // get data from api
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const response = await api.get("/favourites");
        // PAGINATION LOGIC
        setNewsData(response.data);
        setHasMore(response.data.length > 0);
        setIsLoading(false);
        // console.log("API response: ", response); //
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <Box>
      {/* HANDLE FILTERED SEARCHING OF THE DATA LIST + PAGINATION VIEW */}
      <Grid container spacing={2}>
        {filterNewsData.length > 0 ? (
          filterNewsData.slice(0, page).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <NewsItem
                key={index}
                news={item}
                updateMyFavorites={updateMyFavorites}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h4">No Results Found...</Typography>
            </Box>
          </Grid>
        )}
      </Grid>

      {/* LOAD MORE PAGINATION */}
      {isLoading && (
        <CircularProgress
          style={{
            color: "purple",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        />
      )}
      {!isLoading && hasMore && (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "plum",
              color: "purple",
            }}
            onClick={onLoadMore}
          >
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
}
