import React from 'react';
import '../style.css';
import ManureCard from '../components/manureCard.js';
import data2 from '../datasets/data2.json';
import { useState, useEffect } from 'react';

export default function Rain() {
  const [Rain, setRain] = useState([]);

  useEffect(() => {
    setRain(data2);
    console.log(data2);
  }, []);

  let i = 0;

  return (
    <>
      <div>
        <img
          src="https://sandrp.files.wordpress.com/2018/10/ukh-rainfall-graph.png?w=982"
          alt="Organic"
        />
        {Rain.map((blog) => {
          const ManureData = {
            author: blog.author,
            date: blog.date,
            title: blog.title,
            category: blog.category,
            content: blog.content,
          };
          i = i + 1;
          if (blog.category != 'Manures')
            return <ManureCard key={i} ManureData={ManureData} />;
        })}
      </div>
      <img
        src="https://www.researchgate.net/profile/P_Srivastava4/publication/340502920/figure/fig4/AS:877966313652231@1586334889916/Uttarakhand-Rainfall-Distribution-SW-Monsoon-2017.ppm"
        alt="Organic"
      />
      <div></div>
    </>
  );
}
