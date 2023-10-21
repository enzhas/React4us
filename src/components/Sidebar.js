import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="hdn-head">
        <h2>Hello, Sign in</h2>
      </div>
      <div className="hdn-content">
        <h3>Digital Content & Devices</h3>
        <ul>
          <div>
            <li>Amazon Music</li>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div>
            <li>Kindle E-Readers & Books</li>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div>
            <li>Appstore for Android</li>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </ul>
        <div className="line"></div>
      </div>
      <div className="hdn-content">
        <h3>Shop By Department</h3>
        <ul>
          <div>
            <li>Electronics</li>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div>
            <li>Computers</li>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div>
            <li>Smart Homes</li>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div>
            <li>Arts & Crafts</li>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </ul>
        <div className="line"></div>
      </div>
      <div className="hdn-content">
        <h3>Programs & Features</h3>
        <ul>
          <div>
            <li>Gift Cards & Mobile Recharges</li>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div>
            <li>Flight Tickets</li>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div>
            <li>Clearance Store</li>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </ul>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Sidebar;