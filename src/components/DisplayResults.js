import { useEffect, useState } from "react";
import DatasItem from "./DatasItem";
import api from "../api/itemsData";
import axios from "axios";
import { Button, Grid } from "@mui/material";

export default function DisplayResults({
  keyword,
  page,
  onLoadMore,
  updateMyFav,
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

  // const filterNewsData = newsData.filter((item) => {
  //   const propertiesToSearch = [item.name, item.description];
  //   const keywordLowerCase = keyword.toLowerCase();

  //   return propertiesToSearch.some(
  //     (property) =>
  //       property && property.toLowerCase().includes(keywordLowerCase)
  //   );
  // });

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
      console.log("res:", response.data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* HANDLE FILTERED SEARCHING OF THE DATA LIST + PAGINATION VIEW */}
      <Grid container spacing={2}>
        {filterNewsData.length > 0 ? (
          filterNewsData.slice(0, page).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <DatasItem
                key={index}
                news={item}
                updateMyFav={updateMyFav}
                index={index} // numbering order bcs id is null
              />
            </Grid>
          ))
        ) : (
          <h2>No results found...</h2>
        )}
      </Grid>
      {/* LOAD MORE PAGINATION */}
      {isLoading && <h6>Getting more...</h6>}
      {!isLoading && hasMore && (
        <Button
          variant="contained"
          size="small"
          style={{ margin: 10, backgroundColor: "plum", color: "purple" }}
          onClick={onLoadMore}
        >
          Load More
        </Button>
      )}
    </div>
  );
}
