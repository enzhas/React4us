import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            <img src={"../images/pinter1.jpg"} alt="" />
          </li> 
          <li>
            <img src="images/pinter2.jpg" alt="" />
          </li>
          <li>
            <img src="images/pinter3.jpg" alt="" />
          </li>
          <li>
            <img src="images/pinter4.jpg" alt="" />
          </li>
          <li>
            <img src="images/pinter5.jpg" alt="" />
          </li>
          <li>
            <img src="images/pinter6.jpg" alt="" />
          </li>
          <li>
            <img src="images/pinter7.jpg" alt="" />
          </li>
          <li>
            <img src="images/pinter8.jpg" alt="" />
          </li>
          <li>
            <img src="images/pinter9.jpg" alt="" />
          </li>
          <li>
            <img src="images/pinter10.jpg" alt="" />
          </li>
          <li>
            <img src="images/pinter11.jpg" alt="" />
          </li>
          <li>
            <img src="images/pinter12.jpg" alt="" />
          </li>
          <li>
            <img src="images/pinter13.jpg" alt="" />
          </li>
          <li>
            <img src="images/pinter14.jpg" alt="" />
          </li>
          <li>
            <img src="images/pinter15.jpg" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Section2;
