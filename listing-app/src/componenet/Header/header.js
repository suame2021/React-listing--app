import React from 'react';
import './header.css';

const header = () => {
    return (
      <div>
        <div className="header-section">
          <div className="hero-text">
            <span className="hero-text-tittle">Listings </span>
            <span className="hero-text-subtittle">Applications Listing </span>
          </div>
          <img src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
        </div>
      </div>
    );
};

export default header;