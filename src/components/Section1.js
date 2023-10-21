import React from 'react';

const imagePaths = ['si1.jpg', 'si2.jpg', 'si3.jpg', 'si4.jpg'];

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
            {/* Rest of your section 1 content */}
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
          {imagePaths.map((imagePath, index) => (
            <div className="slide" key={index}>
              <img src={`./images/${imagePath}`} alt={`Image ${index + 1}`} />
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;