import React from 'react';
import './Navbar.css'; // File CSS untuk styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Curriculum Vitae</h2>
        <h6>Posted by Cagiva</h6>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Overview">Overview</Link></li>
        <li><Link to="/About">About Me</Link></li>
        <li><Link to="/Skill">Skill & Pengalaman</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
