import React from 'react';
import '../style.css';
import Crop from '../components/crop.js';
import data from '../datasets/data.json';
import { useState, useEffect } from 'react';

export default function Crops() {
  const [Crops, setCrops] = useState([]);

  useEffect(() => {
    setCrops(data);
  }, []);

  return (
    <>
      <div>
        <img
          src="https://source.unsplash.com/1600x900/?organic"
          alt="Organic"
        />
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
    </>
  );
}
