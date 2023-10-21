import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pinter1 from '../images/pinter1.jpg';
import pinter2 from '../images/pinter2.jpg';
import pinter3 from '../images/pinter3.jpg';
import pinter4 from '../images/pinter4.jpg';
import pinter5 from '../images/pinter5.jpg';
import pinter6 from '../images/pinter6.jpg';
import pinter7 from '../images/pinter7.jpg';
import pinter8 from '../images/pinter8.jpg';
import pinter9 from '../images/pinter9.jpg';
import pinter10 from '../images/pinter10.jpg';
import pinter11 from '../images/pinter11.jpg';
import pinter12 from '../images/pinter12.jpg';
import pinter13 from '../images/pinter13.jpg';
import pinter14 from '../images/pinter14.jpg';
import pinter15 from '../images/pinter15.jpg';

// import 'font-awesome/css/font-awesome.min.css';
function Section2() {
  return (
    <section className="sec-2">
      <h3>Popular Products in Wireless Internationally</h3>
      <div className="slide-sec">
        <div className="l-btn">
          {/* <i className="fa-solid fa-chevron-left"></i> */}
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </div>
        <div className="r-btn">
          {/* <i className="fa-solid fa-chevron-right"></i> */}
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </div>
        <h3>Popular Products in Wireless Internationally</h3>
        <ul className="product-slide">
          <li>
            <img src={pinter1} alt="" />
          </li>
          <li>
            <img src={pinter2} alt="" />
          </li>
          <li>
            <img src={pinter3} alt="" />
          </li>
          <li>
            <img src={pinter4} alt="" />
          </li>
          <li>
            <img src={pinter5} alt="" />
          </li>
          <li>
            <img src={pinter6} alt="" />
          </li>
          <li>
            <img src={pinter7} alt="" />
          </li>
          <li>
            <img src={pinter8} alt="" />
          </li>
          <li>
            <img src={pinter9} alt="" />
          </li>
          <li>
            <img src={pinter10} alt="" />
          </li>
          <li>
            <img src={pinter11} alt="" />
          </li>
          <li>
            <img src={pinter12} alt="" />
          </li>
          <li>
            <img src={pinter13} alt="" />
          </li>
          <li>
            <img src={pinter14} alt="" />
          </li>
          <li>
            <img src={pinter15} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Section2;
