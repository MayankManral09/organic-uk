import React from 'react';
import '../style.css';
import PracticeCard from '../components/PracticeCard.js';
import practices from '../datasets/practices.json';
import { useState, useEffect } from 'react';

export default function Practices() {
  const [Practices, setPractices] = useState([]);

  useEffect(() => {
    setPractices(practices);
    console.log(practices);
  }, []);

  return (
    <>
      <div>
        <section>
          <br />
          <br />
          <h2 style={{ 'text-align': 'center' }}>Organic Farming Practices</h2>
          <br />
          <p style={{ 'justify-content': 'center' }}>
            The organic agriculture concept requires strict compliance with
            established standards that define and restrict applicable
            techniques. The common and approved ones include the following.
          </p>
          <br />
          <br />
        </section>
        {/* <img
          src="https://www.nicheagriculture.com/wp-content/uploads/2020/10/Crop-Rotation.jpg"
          alt="Organic"
        /> */}
        <div>
          {Practices.map((practice) => {
            const Practice = {
              key: practice.key,
              title: practice.title,
              content: practice.content,
              img: practice.img,
            };

            return <PracticeCard key={Practice.key} Practice={Practice} />;
          })}
        </div>
      </div>
    </>
  );
}
