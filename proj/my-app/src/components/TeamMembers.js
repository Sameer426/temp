// src/components/TeamMembers.js
import React from 'react';
import './TeamMembers.css';
import feature1 from './assets/feature1.jpeg'; // Placeholder for Siddharth Jain's image
import feature2 from './assets/feature2.jpg'; // Placeholder for Raj Gupta's image
import feature3 from './assets/feature3.jpg'; // Placeholder for Anirudh's image

function TeamMembers() {
  return (
    <div className="team-members-container">
      <h1 className="main-heading">Meet Our Team</h1>
      <div className="team-members-section">
        {/* Siddharth Jain */}
        <div className="team-member">
          <img src={feature1} alt="Siddharth Jain" className="team-image" />
          <p className="team-name">Siddharth Jain</p>
        </div>

        {/* Raj Gupta */}
        <div className="team-member">
          <img src={feature2} alt="Raj Gupta" className="team-image" />
          <p className="team-name">Raj Gupta</p>
        </div>

        {/* Anirudh */}
        <div className="team-member">
          <img src={feature3} alt="Anirudh" className="team-image" />
          <p className="team-name">Anirudh</p>
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
