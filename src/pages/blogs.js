import React from 'react';
import '../style.css';
import Crop from './components/crop.js';
import BlogCard from '../components/BlogCard.js';
import data2 from '../datasets/data2.json';
import { useState, useEffect } from 'react';

export default function Blogs() {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(data2);
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
          {Blogs.map((blog) => {
            const BlogData = {
              author: blog.author,
              date: blog.date,
              title: blog.title,
              category: blog.category,
              content: blog.content,
            };
            i = i + 1;
            return <BlogCard key={i} BlogData={BlogData} />;
          })}
        </div>
      </div>
    </>
  );
}
