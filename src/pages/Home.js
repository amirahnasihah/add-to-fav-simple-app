import { styled } from "@mui/material/styles";
import { Box, Grid, Paper } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

// COMPONENTS
import Header from "../components/Header";
import MyFavouritePanel from "../components/MyFavouritePanel";
import DisplayResults from "../components/DisplayResults";
import Footer from "../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";

// STYLING
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "pink",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// MAIN LOGIC
export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  // SEARCH BAR STATE✅
  const [keyword, setKeyword] = useState("");
  // PAGINATION STATE✅
  const [page, setPage] = useState(4);
  // FAVOURITE PANEL - localstorage
  const LOCALS_STORAGE_KEY = "myFavorites";
  const [myFavorites, setMyFavorites] = useState(
    JSON.parse(localStorage.getItem(LOCALS_STORAGE_KEY)) ?? []
  );

  // REF for display results height
  const displayResultsRef = useRef(null);

  // handle pagination
  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 4);
  };

  // handle searching to target each letter keyword
  const handleSetKeyword = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  // FAVOURITE PANEL
  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem(LOCALS_STORAGE_KEY);
    if (favoritesFromStorage) {
      const parsedFavorites = JSON.parse(favoritesFromStorage);
      setMyFavorites(parsedFavorites);
    }
  }, []);

  // Clear all favorites
  const clearMyFavorites = () => {
    // Clear favorites state
    setMyFavorites([]);

    // Clear my-favorites from local storage
    localStorage.removeItem(LOCALS_STORAGE_KEY);
  };

  // Update favorites
  const updateMyFavorites = (news) => {
    const existingFavorite = myFavorites.find(
      (favorite) => favorite.name === news.name
    );
    if (!existingFavorite) {
      // Add the new favorite to the array with a unique identifier
      const newFavorite = { name: news.name, ...news };
      setMyFavorites([...myFavorites, newFavorite]);
      // Save the updated favorites array to localStorage
      localStorage.setItem(
        LOCALS_STORAGE_KEY,
        JSON.stringify([...myFavorites, newFavorite])
      );
    } else {
      toast.success("Already added to favourites");
    }
  };

  // Update favorite panel height to match display results height
  useEffect(() => {
    if (displayResultsRef.current) {
      const displayResultsHeight = displayResultsRef.current.clientHeight;
      const favoritePanel = document.getElementById("favorite-panel");
      if (favoritePanel) {
        favoritePanel.style.height = `${displayResultsHeight}px`;
      }
    }
  }, [page]);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* HEADER */}
        <Grid item xs={12} md={12}>
          <Header keyword={keyword} handleSetKeyword={handleSetKeyword} />
        </Grid>

        {/* FAV PANEL */}
        <Grid
          item
          xs={4}
          md={3}
          style={{
            overflowY: "scroll",
          }}
        >
          <MyFavouritePanel
            myFavorites={myFavorites}
            handleSetKeyword={handleSetKeyword}
            clearMyFavorites={clearMyFavorites}
          />
        </Grid>

        {/* DISPLAY RESULTS✅ */}
        <Grid item xs={8} md={9}>
          <Box ref={displayResultsRef}>
            <DisplayResults
              page={page}
              keyword={keyword}
              updateMyFavorites={updateMyFavorites}
              onLoadMore={onLoadMore}
            />
          </Box>
        </Grid>

        {/* FOOTER */}
        <Grid item xs={12} md={12} lg={12}>
          <Item>
            <Footer />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
