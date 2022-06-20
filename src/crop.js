import React from 'react';
import './style.css';
import data from './datasets/data.json';

export default function Crop({ CropData }) {
  return (
    <section>
      <br />
      <br />
      <h3>{CropData.No}</h3>
      <h3>Crop Species: {CropData.CropSpecies}</h3>
      <h3>Common/Local Name: {CropData.CommonName}</h3>
      <h3>Manures: {CropData.Manures}</h3>
      <h3>
        Selected Elements Of Traditional Knowledge:{' '}
        {CropData.SelectedElementsOfTraditionalKnowledge}
      </h3>
      <h3>Broad Elevation Range (m): {CropData.BroadElevationRange}</h3>
      <br />
      <br />
    </section>
  );
}
