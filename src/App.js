import React from "react";
import "./css/reset.css";
import "./css/style.css";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
