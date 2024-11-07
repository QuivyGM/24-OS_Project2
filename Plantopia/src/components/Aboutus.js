// src/components/Aboutus.js

import React from 'react';
import '../styles/pages/_aboutus.scss';

const Aboutus = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>Learn more about our journey and what makes us passionate about plants.</p>
      <div className="team">
        {[1, 2, 3].map((member) => (
          <div key={member} className="team-member">
            <img src={`./images/${member}.jpg`} alt={`Team member ${member}`} />
            <h2>Team Member {member}</h2>
            <p>Position {member}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutus;