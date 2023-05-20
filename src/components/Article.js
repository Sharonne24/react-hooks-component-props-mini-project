import React from 'react'

const Article = ({ title, date, preview }) => {
    // Default date if no prop is passed
    const defaultDate = "January 1, 1970";
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date || defaultDate}</small>
        <p>{preview}</p>
      </article>
    );
  };

export default Article