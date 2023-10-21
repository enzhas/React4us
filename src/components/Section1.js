import React from 'react';

import si1 from './images/si1.jpg';
import si2 from './images/si2.jpg';
import si3 from './images/si3.jpg';
import si4 from './images/si4.jpg';

import ga1 from './images/ga1.jpg';
import ga2 from './images/ga2.jpg';
import ga3 from './images/ga3.jpg';
import ga4 from './images/ga4.jpg';

import amazonBasics from './images/amazon basics.jpg';
import banner from './images/banner.jpg';
import shopValentines from './images/shop valentine\'s.jpg';
import electronics from './images/electronics.jpg';
import findYourDeal from './images/find your deal.jpg';
import easyReturn from './images/easy return.jpg';

import sc1 from './images/sc1.jpg';
import sc2 from './images/sc2.jpg';
import sc3 from './images/sc3.jpg';
import sc4 from './images/sc4.jpg';

function Section1() {
  return (
    <section className="sec-1">
      <div className="container">
        <div className="container-1">
          <div className="para">
            <p>You are on Amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.</p>
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">Click here to go to amazon.in</a>
          </div>
          <div className="product-comp">
          <div className="box">
              <h3>Gaming Accessories</h3>
              <div className="box-a">
                <div>
                  <img src={ga1} alt="Headsets" />
                  <span>Headsets</span>
                </div>
                <div>
                  <img src={ga2} alt="Keyboards" />
                  <span>Keyboards</span>
                </div>
                <div>
                  <img src={ga3} alt="Computer mice" />
                  <span>Computer mice</span>
                </div>
                <div>
                  <img src={ga4} alt="Chairs" />
                  <span>Chairs</span>
                </div>
              </div>
              <a href="/category/gaming">See More</a>
            </div>
            <div className="box">
              <h3>Shop By Category</h3>
              <div className="box-a">
                <div>
                  <img src={sc1} alt="Laptop" />
                  <span>Laptop</span>
                </div>
                <div>
                  <img src={sc2} alt="Video Games" />
                  <span>Video Games</span>
                </div>
                <div>
                  <img src={sc3} alt="Baby" />
                  <span>Baby</span>
                </div>
                <div>
                  <img src={sc4} alt="Toy & Games" />
                  <span>Toy & Games</span>
                </div>
              </div>
              <a href="#">Shop Now</a>
            </div>
            <div className="box box-c">
              <h3>Amazon Basics</h3>
              <div>
                <img src={amazonBasics} alt="Amazon Basics" />
              </div>
              <a href="#">See More</a>
            </div>
            <div className="box-b">
              <div className="best">
                <h3>Sign up for the Best Experience</h3>
                <button>Sign in securely</button>
              </div>
              <div>
                <img src={banner} alt="Banner" />
              </div>
            </div>
          </div>
          <div className="product-comp">
            <div className="box box-c">
              <h3>Shop Valentine's Day</h3>
              <div>
                <img src={shopValentines} alt="Shop Valentine's Day" />
              </div>
              <a href="#">See More</a>
            </div>
            <div className="box box-c">
              <h3>Electronics</h3>
              <div>
                <img src={electronics} alt="Electronics" />
              </div>
              <a href="#">See More</a>
            </div>
            <div className="box box-c">
              <h3>Find your ideal TV</h3>
              <div>
                <img src={findYourDeal} alt="Find your ideal TV" />
              </div>
              <a href="#">See More</a>
            </div>
            <div className="box box-c">
              <h3>Easy Returns</h3>
              <div>
                <img src={easyReturn} alt="Easy Returns" />
              </div>
              <a href="#">See More</a>
            </div>
          </div>
        </div>
        <div className="slider">
          {/* <div className="image-box">
            <div className="slide">
              <img src="images/si1.jpg" alt="" />
            </div>
            <div className="slide">
              <img src="images/si2.jpg" alt="" />
            </div>
            <div className="slide">
              <img src="images/si3.jpg" alt="" />
            </div>
            <div className="slide">
              <img src="images/si4.jpg" alt="" />
            </div>
          </div> */}
          <div className="image-box">
            <div className="slide">
              <img src={si1} alt="" />
            </div>
            <div className="slide">
              <img src={si2} alt="" />
            </div>
            <div className="slide">
              <img src={si3} alt="" />
            </div>
            <div className="slide">
              <img src={si4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;