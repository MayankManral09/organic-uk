import React from 'react';
import '../style.css';

export default function PracticeCard({ Practice }) {
  return (
    <section>
      <br />
      <br />
      <h2 style={{ 'text-align': 'center' }}>{Practice.title}</h2>
      <br />
      <p style={{ 'justify-content': 'center' }}>{Practice.content}</p>
      <br />
      {Practice.img != '' ? (
        <img src={`${Practice.img}`} alt="Organic" />
      ) : (
        <></>
      )}
    </section>
  );
}
