import React from 'react';
import { Link } from 'react-scroll';
function Offer() {
  return (
    <div id="presentation">
      <div className="pr-heading">
        <h1>
          A BIG <span>OFFER</span> FOR THIS SUMMER
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipiscing
        </p>
        <div className="pr-btns">
          <Link
            to="contact"
            className="pr-btn"
            smooth={true}
            duration={1500}
          >
            Join us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Offer
