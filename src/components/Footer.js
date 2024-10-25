import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><a href="project-fe/src/pages/Home.js">Home</a></li>
        <li><a href="../pages/Overview">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="home-sci">
      <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.0.9/css/boxicons.min.css" />
  <title>Your App Title</title>
</head>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-instagram'></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-whatsapp'></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-linkedin'></i>
      </a>
    </div>
      <p><h5>Copyright by Cagiva Nur Stella</h5></p>
    </footer>
  );
};

export default Footer;