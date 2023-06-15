import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import api from "../api/itemsData";
import { Button, Grid, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";

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
  const [reachedEnd, setReachedEnd] = useState(false);

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
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);

    try {
      const response = await api.get("/favourites");
      // PAGINATION LOGIC
      setNewsData(response.data);
      setHasMore(response.data.length > 0);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // const onLoadMore = () => {
  //   if (page >= filterNewsData.length) {
  //     setReachedEnd(true);
  //   } else {
  //     setPage((prevPage) => prevPage + 2);
  //   }
  // };

  return (
    <div>
      {/* HANDLE FILTERED SEARCHING OF THE DATA LIST + PAGINATION VIEW */}
      <Grid container spacing={2}>
        {filterNewsData.length > 0 ? (
          filterNewsData.slice(0, page).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <NewsItem
                key={index}
                news={item}
                updateMyFavorites={updateMyFavorites}
                // index={index} // numbering order bcs id is null
              />
            </Grid>
          ))
        ) : (
          <h2>No results found...</h2>
        )}
      </Grid>

      {/* LOAD MORE PAGINATION */}
      {isLoading && <Typography variant="h6">Getting more...</Typography>}
      {!isLoading && hasMore && (
        <Grid container justifyContent="center">
          <Button
            variant="contained"
            size="small"
            style={{
              margin: 10,
              backgroundColor: "plum",
              color: "purple",
            }}
            onClick={onLoadMore}
          >
            Load More
          </Button>
          <Grid></Grid>
        </Grid>
      )}
      {reachedEnd && <Alert severity="info">Reached the end of the list</Alert>}
    </div>
  );
}

// const filterNewsData = newsData.filter((item) => {
//   const propertiesToSearch = [item.name, item.description];
//   const keywordLowerCase = keyword.toLowerCase();

//   return propertiesToSearch.some(
//     (property) =>
//       property && property.toLowerCase().includes(keywordLowerCase)
//   );
// });
