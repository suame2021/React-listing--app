import React from "react";
import Header from "../../componenet/Header/header";
import Listing from "../../componenet/listing/Listing";
import Sidebar from "../../componenet/sidebar/Sidebar";
import './Home.css'



import './Home.css'


function Home ()  {
    return (
      <div>
        <Header />
        <div className="home-page">
          <Listing />
          <Sidebar />
        </div>
      </div>
    );
}
 
export default Home ;