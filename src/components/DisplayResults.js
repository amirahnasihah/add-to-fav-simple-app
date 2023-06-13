import { useEffect, useState } from "react";
import DatasItem from "./DatasItem";
import api from "../api/itemsData";

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
    const propertiesToSearch = [item.name, item.description];
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
      const response = await api.get("/itemsData");
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
    <>
      {/* HANDLE FILTERED SEARCHING OF THE DATA LIST + PAGINATION VIEW */}
      {filterNewsData.length > 0 ? (
        filterNewsData
          .slice(0, page)
          .map((item, index) => (
            <DatasItem key={index} news={item} updateMyFav={updateMyFav} />
          ))
      ) : (
        <h2>No results found...</h2>
      )}

      {/* LOAD MORE PAGINATION */}
      {isLoading && <h6>Getting more...</h6>}
      {!isLoading && hasMore && <button onClick={onLoadMore}>Load More</button>}
    </>
  );
}
