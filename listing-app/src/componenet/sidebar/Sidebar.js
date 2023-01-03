import React from "react";
import './Sidebar.css';
function Sidebar () {
    return (
      <div className="sidebar-section">
        <div className="sidebar-subsection">
          <span className="sidebar-title">About me</span>
          <img
            className="sidear-img"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
          <p>
            Two before narrow not relied how except moment myself. Dejection
            assurance mrs led certainly. So gate at no only none open. Betrayed
            at properly it of graceful on. Dinner abroad am depart ye turned
            hearts as me wished. Therefore allowance too perfectly gentleman
            supposing man his now. 
          </p>
        </div>

        <div className="sidebar-subsection">
          <span className="sidebar-title">Categories</span>
          <ul className="sidebar-categories">
            <li className="sidebar-category">Buy</li>
            <li className="sidebar-category">Sell</li>
            <li className="sidebar-category">Rent</li>
            <li className="sidebar-category">Hostel</li>
            <li className="sidebar-category">B $ B</li>
            <li className="sidebar-category">Hotel</li>
          </ul>
        </div>

        <div className="sidebar-subsection">
          <span className="sidebar-title">FOllow us</span>
          <div className="sidebar-social-icons">
            <i className="sidebar-social-icon fab fa-instagram"></i>
            <i className="sidebar-social-icon fab fa-facebook"></i>
            <i className="sidebar-social-icon fab fa-linkedin"></i>
            <i className="sidebar-social-icon fab fa-twitter"></i>
          </div>
        </div>
      </div>
    );
}
 
export default Sidebar;