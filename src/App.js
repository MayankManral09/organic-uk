import React from 'react';
import './style.css';
import Crop from './crop.js';
import data from './datasets/data.json';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>
        {data.map(function (crop) {
          // returns Nathan, then John, then Jane
          const CropData = {
            No: crop.No,
            CropSpecies: crop.CropSpecies,
            CommonName: crop.CommonName,
            SelectedElementsOfTraditionalKnowledge:
              crop.SelectedElementsOfTraditionalKnowledge,
            BroadElevationRange: data.BroadElevationRange,
            Manures: data.Manures,
          };
          return <Crop key={crop.No} CropData={CropData} />;
        })}
      </p>
    </div>
  );
}
