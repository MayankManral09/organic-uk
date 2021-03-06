import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './style.css';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import Crops from './pages/crops.js';
import Manures from './pages/manures.js';
import Rain from './pages/rain.js';
import About from './pages/about.js';
import Practices from './pages/practices.js';

export default function App() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/manures" element={<Manures />} />
          <Route path="/rain" element={<Rain />} />
          <Route path="/practices" element={<Practices />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
