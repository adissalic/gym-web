import React from 'react';
import aboutimage from '../images/about.png';

function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt="" />
              </div>
              <div className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ispum dolor sit, amet consctur adipising elit. Facere reppellat neccessitation dolor ut fugiat.</p>
                <button>READ MORE</button>
              </div>
    </div>
  )
}

export default About;
