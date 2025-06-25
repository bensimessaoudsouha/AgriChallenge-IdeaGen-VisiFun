import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MapPage from "./components/MapPage";
import TreeQuiz from "./components/TreeQuiz";
import Leaderboard from "./components/Leaderboard";
import PlantSearch from "./components/PlantSearch";
import HelpForm from "./components/HelpForm";
import Practice from "./components/Practice";
import Hint from "./components/Hint";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/tree/:id" element={<TreeQuiz />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/search" element={<PlantSearch />} />
        <Route path="/help" element={<HelpForm />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/hint" element={<Hint />} />
      </Routes>
    </Router>
  );
}

export default App;