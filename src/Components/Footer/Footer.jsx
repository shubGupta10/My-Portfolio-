import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div className="nav-rectangle">
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
  );
};

export default Footer;
