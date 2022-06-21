import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import Crop from './components/crop.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import data from './datasets/data.json';
import Manures from './manures.js';
import Blogs from './blogs.js';

export default function App() {
  const [Crops, setCrops] = useState([]);

  useEffect(() => {
    setCrops(data);
    console.log(JSON.stringify(data));
    console.log(data[0].Manures);
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div>
        <img
          src="https://source.unsplash.com/1600x900/?onion"
          alt="uttrakhand"
        />
      </div>

      <Blogs />
      {/* <Manures /> */}
      <Footer />
    </>
  );
}
