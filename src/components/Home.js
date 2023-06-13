import { styled } from "@mui/material/styles";
import { Box, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";

// Components
import Header from "./Header";
import MyFavouritePanel from "./MyFavouritePanel";
import DisplayResults from "./DisplayResults";
import Footer from "./Footer";

// STYLING
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "pink",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// MAIN LOGIC
export default function BasicGrid() {
  // SEARCH BAR STATE✅
  const [keyword, setKeyword] = useState("");
  // PAGINATION STATE✅
  const [page, setPage] = useState(4);
  // FAVOURITE PANEL - localstorage
  const [favorites, setFavorites] = useState([]);

  // handle pagination
  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 4);
  };

  // handle searching to target each letter keyword
  const handleSetKeyword = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  // ✅ handle searchbar data filtering
  // const filterItemsData = itemsData.filter((item) => {
  // 	return item.name.toLowerCase().includes(keyword.toLowerCase());
  // });

  // FAVOURITE PANEL
  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem("favorites");
    if (favoritesFromStorage) {
      const parsedFavorites = JSON.parse(favoritesFromStorage);
      setFavorites(parsedFavorites);
    }
  }, []);

  // handle favourite data CRUD - add to my fav / clear fav / update
  const myFav = (item) => {
    // Check if the item is already in favorites
    const isAlreadyFav = favorites.some((favItem) => favItem.id === item.id);

    if (!isAlreadyFav) {
      // Add the item to favorites
      const updatedFavorites = [...favorites, item];
      setFavorites(updatedFavorites);

      // Save updated favorites to local storage
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  // DELETE FAV
  const clearMyFav = () => {
    console.log("clearMyFav");
    // Clear favorites state
    setFavorites([]);

    // Clear favorites from local storage
    localStorage.removeItem("favorites");
  };

  // UPDATE FAV
  const updateMyFav = () => {
    console.log("updateMyFav");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* HEADER */}
        <Grid item xs={12} md={12}>
          <Header keyword={keyword} handleSetKeyword={handleSetKeyword} />
        </Grid>

        {/* FAV PANEL */}
        <Grid item xs={3} md={3} style={{ backgroundColor: "plum" }}>
          <MyFavouritePanel
            favorites={favorites}
            handleSetKeyword={handleSetKeyword}
            myFav={myFav} // add to fav
            clearMyFav={clearMyFav} // clear fav
          />
        </Grid>

        {/* DISPLAY RESULTS✅ */}
        <Grid
          item
          xs={9}
          md={9}
          style={{ backgroundColor: "pink", padding: 1 }}
        >
          <Item>
            <DisplayResults
              page={page} // pagination
              keyword={keyword} // for searching
              updateMyFav={updateMyFav} // update fav
              onLoadMore={onLoadMore} // load more btn
            />
          </Item>
        </Grid>

        {/* FOOTER */}
        <Grid item xs={12} md={12}>
          <Item>
            <Footer />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
