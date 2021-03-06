import React from "react";

const Note = ({ categories = [], content, date }) => (
  <li>
    <p>{content}</p>
    <small>
      <time>{date}</time>
    </small>
    {categories.map((category) => (
      <small key={category}> {category}</small>
    ))}
  </li>
);

export default Note;
