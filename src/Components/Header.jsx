import React from 'react'
import { Link } from 'react-scroll';

function Header() {
  return (
    <div id="main">
      <div className="pr-heading">
        <h2>STEP UP YOUR</h2>
        <h1>
          <span>FITNESS</span> WITH US
        </h1>
        <p className="details">
          Build Your Body And Fitness With Professional Touch
        </p>
        <div className="header-btns">
          <Link to='contact' className='header-btn' smooth={true} duration={1500}>Join us</Link>
        </div>
      </div>
    </div>
  );
}

export default Header
