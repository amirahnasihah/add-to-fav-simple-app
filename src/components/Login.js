import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginInProgress, setIsLoginInProgress] = useState(false);
  const navigate = useNavigate();

  // Function to handle login and submit login form
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setIsLoginInProgress(true);
    setIsLoggedIn(false);
    setErrorMessage(false);

    setTimeout(() => {
      if (userName === "John" && password === "12345") {
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        localStorage.setItem("userName", JSON.stringify(userName));
        navigate("/home");
        setErrorMessage(false);
      } else if (userName === "" || password === "") {
        // Changed the condition here
        toast.warning("Please fill in all the details");
        setIsLoggedIn(false);
      } else {
        toast.error("Invalid username or password");
        setIsLoggedIn(false);
      }

      setIsLoginInProgress(false);
    }, 5000);
  };

  if (isLoggedIn) {
    return <Navigate to="/home">Home</Navigate>;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {!isLoginInProgress ? <LockOutlinedIcon /> : <LockOpenOutlinedIcon />}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleSubmitLogin}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={userName} // Add this line
            onChange={(e) => setUserName(e.target.value)} // Add this line
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password} // Add this line
            onChange={(e) => setPassword(e.target.value)} // Add this line
          />

          {!isLoginInProgress ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <CircularProgress color="inherit" />
            </Button>
          )}

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
