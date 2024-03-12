import React from 'react';
import aboutimage from '../images/about.png';

function About() {
  return (
    <div id='about'>
    <div className='about-image'>
    <img src={aboutimage} alt=''/>
    </div>
    <div className='about-text'>
    <h1><span>Janak </span>Fitness</h1>
    <p>Welcome to Janak Fitness, your ultimate destination for achieving your fitness goals! With state-of-the-art equipment, expert trainers, and a motivating environment, we're dedicated to helping you unlock your full potential. Whether you're a beginner or a seasoned fitness enthusiast, our personalized approach ensures you get the support and guidance you need every step of the way. Join Janak Fitness today and embark on a journey to a healthier, stronger you!"</p>
    <button>Know More</button>
    </div>
    </div>
  )
}

export default About
