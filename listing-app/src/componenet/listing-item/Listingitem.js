import React from "react";
import './Listingitem.css';
import {Link} from 'react-router-dom';


function ListingItem ()  {
    return (
      <div className="listing-item">
        <img
          className="listing-img"
          src=" https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="listing-details">
          <div className="listing-categories">
            <span className="listing-category">Buy</span>
            <span className="listing-category">Sell</span>
          </div>
          <span className="listing-title">
            <Link to='/detail'>Awesome Property</Link>
            </span>
          <hr />
          <span className="listing-time">2 days ago</span>
          <p className="listing-description">
            Two before narrow not relied how except moment myself. Dejection
            assurance mrs led certainly. So gate at no only none open. Betrayed
            at properly it of graceful on.Two before narrow not relied how
            except moment myself. Dejection assurance mrs led certainly. So gate
            at no only none open. Betrayed at properly it of graceful on.Two
            before narrow not relied how except moment myself. Dejection
            assurance mrs led certainly. So gate at no only none open. Betrayed
            at properly it of graceful on.
          </p>
        </div>
      </div>
    );
}
 
export default ListingItem;