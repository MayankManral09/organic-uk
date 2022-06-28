import React from 'react';
import '../style.css';

export default function ManureCard({ ManureData }) {
  return (
    <section>
      <br />
      <br />
      <h2 style={{ 'text-align': 'center' }}>{ManureData.title}</h2>
      <br />
      <h4 style={{ textAlign: 'right' }}>
        By {ManureData.author} on {ManureData.date}
      </h4>
      <br />
      <p style={{ 'justify-content': 'center' }}>{ManureData.content}</p>
      <br />
      <br />
    </section>
  );
}
