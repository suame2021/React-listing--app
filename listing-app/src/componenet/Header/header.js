import React from "react";
import "./header.css";

const header = () => {
  return (
    <div>
      <div className="header-section">
        <div className="hero-text">
          <span className="hero-text-tittle">Marketplace </span>
          <span className="hero-text-subtittle"> Property Listing </span>
        </div>
        <img
          className="hero-img"
          src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></img>
      </div>
    </div>
  );
};

export default header;
