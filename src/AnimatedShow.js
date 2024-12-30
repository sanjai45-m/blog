    // AnimatedShow.jsx
import React from 'react';
import './AnimatedShow.css';


const AnimatedShow = () => {
  return (
    <>
          <div className="container"></div>

    <div className="animated-show-container">
      <div className="background-overlay"></div>
      <div className="sliding-image"></div>
      <div className="text-content">
        <h1>Welcome to Our Showcase</h1>
        <p>
          Experience the best of design and functionality combined. Our platform offers seamless integration
          of visuals and content to deliver an unparalleled user experience.
        </p>
        <button>Learn More</button>
      </div>
    </div>
    </>
  );
};

export default AnimatedShow;
