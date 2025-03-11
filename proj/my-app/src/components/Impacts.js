// src/components/Impacts.js
import React from 'react';
import './Impacts.css';
import feature2 from './assets/impact.jpg'; // Placeholder for circular image

function Impacts() {
  return (
    <div className="impacts-wrapper">
      <h1 className="impacts-heading">Driving Positive Change</h1>
      <div className="impacts-content">
        {/* Left Block */}
        <div className="impact-card left-card">
          <h2 className='impchk1'>Environmental Benefits</h2>
          <p>
            Our bioplastics reduce carbon emissions by up to 75% compared to petroleum plastics. Made from renewable sources like corn starch, they minimize fossil fuel dependency and enable industrial composting, promoting waste reduction and sustainability.
          </p>
        </div>

        {/* Circular Image Section */}
        <div className="impact-image-container">
          <img src={feature2} alt="Circular Image" className="impact-image" />
        </div>

        {/* Right Block */}
        <div className="impact-card right-card">
          <h2 className='impchk2'>Economic Scalability</h2>
          <p>
            Using abundant raw materials like corn starch, we ensure cost-effective production. Our scalable manufacturing processes make eco-friendly solutions affordable for B2B clients, driving adoption across industries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Impacts;
