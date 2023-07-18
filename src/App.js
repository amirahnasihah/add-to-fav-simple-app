import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/" {...props} exact element={<Login />} />
        <Route path="/home" {...props} element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
