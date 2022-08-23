import logo from "./logo.svg";
import TrainerDetail from "./Components/TrainersDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Admin from "./Components/AdminControl";

import "./App.css";
import Registration from "./Components/Registration";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />{" "}
      <Route path="/TrainersDetail/:Id" element={<TrainerDetail />} />{" "}
      <Route exact path="/admin" element={<Admin />} />{" "}
      <Route exact path="/registration" element={<Registration />} />{" "}
    </Routes>

    // <Home />
  );
}

export default App;
