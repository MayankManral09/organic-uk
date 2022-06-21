import React from 'react';
import '../style.css';

export default function BlogCard({ BlogData }) {
  return (
    <section>
      <br />
      <br />
      <h2 style={{ 'text-align': 'center' }}>{BlogData.title}</h2>
      <br />
      <br />
      <h4>Author: {BlogData.author}</h4>
      <h4>Date: {BlogData.date}</h4>
      <h4>Category: {BlogData.category}</h4>
      <br />
      <h3 style={{ 'justify-content': 'center' }}>{BlogData.content}</h3>
      <br />
      <br />
    </section>
  );
}
