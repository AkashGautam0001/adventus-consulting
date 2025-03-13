import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/Home";
import AboutUs from "./pages/AboutPage/AboutUs";
import Services from "./pages/ServicesPage/Services";
import Projects from "./pages/ProjectsPage/Projects";
import Partners from "./pages/PartnersPage/Partners";
import MediaNews from "./pages/MediaNewsPage/MediaNews";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/media" element={<MediaNews />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
