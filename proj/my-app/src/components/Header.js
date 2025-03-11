// src/components/Header.js
import React from 'react';
import './Header.css';
import bannerImage from './assets/img0.jpg'; // Ensure the correct path to your image

function Header() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="header-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">EcoPlex</div>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a href="#home" onClick={(e) => { 
                  e.preventDefault(); 
                  window.scrollBy({ top: 135, behavior: 'smooth' }); 
              }}>
                Home
              </a>
            </li>
            <li>
              <a href="#product" onClick={(e) => { 
                  e.preventDefault(); 
                  window.scrollBy({ top: 580, behavior: 'smooth' }); 
              }}>
                Our Product
              </a>
            </li>
            <li><a href="#features" onClick={(e) => handleScroll(e, 'features')}>Features</a></li>
            <li><a href="#application" onClick={(e) => handleScroll(e, 'application')}>Application</a></li>
            <li>
              <a href="#vision" onClick={(e) => { 
                  e.preventDefault(); 
                  window.scrollBy({ top: 2410, behavior: 'smooth' }); 
              }}>
                Our Vision
              </a>
            </li>
            <li><a href="#team" onClick={(e) => handleScroll(e, 'team')}>Teams</a></li>
          </ul>
        </nav>
      </header>

      {/* Tagline Section */}
      <div className="tagline-section">
        <div className="tagline-content">
          <h1>
            <span className="nature">Nature Creates.</span>
            <span className="innovate">We Innovate.</span>
          </h1>
          <h2 className="line1">J-WIN: The Future of Sustainable Plastics.</h2>
          <p className="line2">
            Crafted from renewable sources like corn starch, offer a sustainable, low-carbon alternative to petrochemical-based plastics, ensuring safer and eco-friendly solutions for everyday products.
          </p>
        </div>
        <div className="banner-image-container">
          {/* Replace with your image */}
          <img src={bannerImage} alt="Sustainable Feedstocks" className="banner-image" />
        </div>
      </div>
    </div>
  );
}

export default Header;
