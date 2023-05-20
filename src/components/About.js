import React from 'react'

const About = (props) => {
    const { image, about } = props;
  
    // Default image URL 
    const defaultImage = "https://via.placeholder.com/215";
  
    return (
      <aside>
        <img src={image || defaultImage} alt="blog logo" />
        <p>{about}</p>
      </aside>
    );
  }
  
  export default About;