import React from 'react';
import logoHAU from '../assets/images/logoHAU.png';
import '../assets/styles/Header.css'

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <div className ="logoicon">
          <img src={logoHAU} alt="Logo HAU"/>
        </div>
      </div>
      <nav className="nav">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Services</a>
        <a href="#" className="nav-link">Contact</a>
      </nav>
      <button className="btn-login">Login</button>
    </header>
  );
};

export default Header;