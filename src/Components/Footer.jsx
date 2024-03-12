import React from 'react';
import Logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={Logo} alt='' /></div>
      <div className="footer-links">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="copyright">Copyright@2024Janak-Fitness</div>
    </footer>
  );
};

export default Footer;
