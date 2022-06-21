import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './style.css';
import Crop from './components/crop.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import data from './datasets/data.json';
import Home from './pages/home.js';
import Crops from './pages/crops.js';
import Blogs from './pages/blogs.js';
import About from './pages/about.js';

export default function App() {
  const [CropsData, setCropsData] = useState([]);

  useEffect(() => {
    setCropsData(data);
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manures" element={<Crops />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* <Blogs /> */}
      {/* <Crops /> */}
      <Footer />
    </>
  );
}
