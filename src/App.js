import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/" {...props} exact element={<Login />} />
        <Route path="/home" {...props} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
