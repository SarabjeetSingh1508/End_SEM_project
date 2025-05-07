import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>FitLife Studio</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#leaderboard">Leaderboard</a></li>

        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-buttons">
        <a href="#login" className="navbar-login">Login</a>
        <a href="#signup" className="navbar-signup">Sign Up</a>
      </div>
    </nav>
  );
};



export default Navbar;