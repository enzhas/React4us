import React from 'react';
import logo from '../images/logo.png'
import usFlag from '../images/usflag.jpg'


import 'font-awesome/css/font-awesome.min.css';

function Header() {
  return (
    <header>
      <div className="first">
        <div className="flex logo">
          <a href="#"><img src={logo} alt="logo" /></a>
          <div className="map flex">
            <i className="fa fa-map-marker"></i>
            <div>
              <span>Deliver to</span>
              <span>Kazakhstan</span>
            </div>
          </div>
        </div>
        <div className="flex input">
          <div>
            <span>All</span>
            <i className="fa fa-caret-down"></i>
          </div>
          <input type="text" />
          <i className="fa fa-search"></i>
        </div>
        <div className="flex right">
          <div className="flex lang">
            <img src={usFlag} alt="" />
            <i className="fa fa-caret-down"></i>
          </div>
          <div className="sign">
            <span>Hello, Sign in</span>
            <div className="flex ac">
              <span>Accounts & Lists</span>
              <i className="fa fa-caret-down"></i>
            </div>
          </div>
          <div className="sign">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
          <div className="flex cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="ca">Cart</span>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="second-1">
          <div>
            <i className="fa fa-bars"></i>
            <span>All</span>
          </div>
        </div>
        <div className="second-2">
          <ul>
            <li>Today's Deal</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
          </ul>
        </div>
        <div className="second-3">
          <span>Shop Valentine's Day</span>
        </div>
      </div>
    </header>
  );
}

export default Header;