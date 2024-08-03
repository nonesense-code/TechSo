import React from "react";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Bod from "./components/Bod.jsx";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/" />
        <Link to="/bod" />
        <Link to="/contact" />
        <Link to="/event" />
      </nav>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/bod" element={<Bod />} />
      </Routes>
    </Router>
  );
}

export default App;
