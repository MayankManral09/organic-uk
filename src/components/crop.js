import React from 'react';
import '../style.css';

export default function Crop({ CropData }) {
  return (
    <section>
      <br />
      <br />
      <h3 style={{ textAlign: 'center' }}>{CropData.No}</h3>
      <br />
      <h3>Crop Species: {CropData.CropSpecies}</h3>
      <br />
      <h3>Common/Local Name: {CropData.CommonName}</h3>
      <br />
      <h3>Manures: {CropData.Manures}</h3>
      <br />
      <h3>
        Selected Elements Of Traditional Knowledge:{' '}
        {CropData.SelectedElementsOfTraditionalKnowledge}
      </h3>
      <br />
      <h3>Broad Elevation Range (m): {CropData.BroadElevationRange}</h3>
      <br />
      <br />
    </section>
  );
}
