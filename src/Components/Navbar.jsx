import React, { useState } from 'react'
import { Link } from 'react-scroll';
import logo from '../images/logo.png'

function Navbar() {
    const [nav, setNav] = useState(false);

const changeBackground = () =>{
    if (window.scrollY >= 50) {
      setNav(false);
    }
     if (window.scrollY === 300) {
       setNav(true);
     } else {
       setNav(true);
     }
}

window.addEventListener('scroll', changeBackground);



  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo" smooth={true} duration={2000}>
        <img src={logo} alt="" />{" "}
      </Link>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration={1000}>
            Header
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={1000}>
            Features
          </Link>
        </li>
        <li>
          <Link to="presentation" smooth={true} duration={1000}>
            Offer
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
