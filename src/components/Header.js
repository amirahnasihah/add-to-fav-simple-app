// import { useState } from "react";
import { Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header({ keyword, handleSetKeyword }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userName, setUserName] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* LOGO */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>

          {/* SEARCH BAR */}
          <Search>
            <SearchIcon />
          </Search>
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <form>
            <input
              type="text"
              placeholder="search something..."
              value={keyword}
              onChange={handleSetKeyword}
            />
            {/* <button type="submit">Search</button> */}
          </form>

          {/* LOG OUT */}
          <button>Log Out</button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
