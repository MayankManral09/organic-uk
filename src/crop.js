import React from 'react';
import './style.css';
import data from './datasets/data.json';

export default function Crop({ CropData }) {
  return (
    <div>
      <br />
      <br />
      <h3>No: {CropData.No}</h3>
      <h3>CropSpecies: {CropData.CropSpecies}</h3>
      <h3>CommonName: {CropData.CommonName}</h3>
      <h3>
        SelectedElementsOfTraditionalKnowledge:{' '}
        {CropData.SelectedElementsOfTraditionalKnowledge}
      </h3>
      <h3>BroadElevationRange: {CropData.BroadElevationRange}</h3>
      <h3>Manures: {CropData.Manures}</h3>
      <br />
      <br />
    </div>
  );
}
