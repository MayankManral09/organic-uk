import React from 'react';
import '../style.css';
import ManureCard from '../components/manureCard.js';
import data2 from '../datasets/data2.json';
import { useState, useEffect } from 'react';

export default function Manures() {
  const [Manures, setManures] = useState([]);

  useEffect(() => {
    setManures(data2);
    console.log(data2);
  }, []);

  let i = 0;

  return (
    <>
      <div>
        <img
          src="https://source.unsplash.com/1600x900/?organic"
          alt="Organic"
        />
        <div>
          {Manures.map((blog) => {
            const ManureData = {
              author: blog.author,
              date: blog.date,
              title: blog.title,
              category: blog.category,
              content: blog.content,
            };
            i = i + 1;
            return <ManureCard key={i} ManureData={ManureData} />;
          })}
        </div>
      </div>
    </>
  );
}
