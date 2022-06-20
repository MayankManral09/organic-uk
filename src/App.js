import React from 'react';
import './style.css';
import Crop from './crop.js';
import data from './datasets/data.json';
import { useState, useEffect } from 'react';

export default function App() {
  const [Crops, setCrops] = useState([]);

  useEffect(() => {
    setCrops(data);
    console.log(JSON.stringify(data));
    console.log(data[0].Manures);
  }, []);

  return (
    <div>
      <h1>Organic Uttrakhand</h1>
      {/* {setInterval(() => {
        return (
          <img
            src="https://source.unsplash.com/1600x900/?organic"
            alt="Organic"
          /> 
        );
      }, 5000)} */}
      <img src="https://source.unsplash.com/1600x900/?onion" alt="uttrakhand" />
      <img
        src="https://source.unsplash.com/1600x900/?chives"
        alt="uttrakhand"
      />
      <img
        src="https://source.unsplash.com/1600x900/?uttrakhand"
        alt="uttrakhand"
      />
      <img src="https://source.unsplash.com/1600x900/?organic" alt="Organic" />
      <div>
        {Crops.map((crop) => {
          const CropData = {
            No: crop.No,
            CropSpecies: crop.CropSpecies,
            CommonName: crop.CommonName,
            SelectedElementsOfTraditionalKnowledge:
              crop.SelectedElementsOfTraditionalKnowledge,
            BroadElevationRange: crop.BroadElevationRange,
            Manures: crop.Manures,
          };
          return <Crop key={crop.No} CropData={CropData} />;
        })}
      </div>
    </div>
  );
}
