import React from 'react';
import '../style.css';

export default function ManureCard({ ManureData }) {
  return (
    <section>
      <br />
      <br />
      <h2 style={{ 'text-align': 'center' }}>{ManureData.title}</h2>
      <br />
      <br />
      <span>Author: {ManureData.author}</span>
      <span>Date: {ManureData.date}</span>
      <h4>Category: {ManureData.category}</h4>
      <br />
      <p style={{ 'justify-content': 'center' }}>{ManureData.content}</p>
      <br />
      <br />
    </section>
  );
}
