import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav id="NavPos" className="navbar navbar-expand-lg w-100 bg-gold">
      <div className="container-fluid">
        <Link className="navbar-brand myportfolioColor " to="/" >Portfolio</Link>
        <Link to="/contact" className='contactIcon'>
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link activeLink navLinksTag sameColor" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link id="aboutBtn" className="nav-link navLinksTag sameColor" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link id="skillsBtn" className="nav-link navLinksTag sameColor" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link id="projectsBtn" className="nav-link navLinksTag sameColor" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link id="contactBtn" className="nav-link navLinksTag sameColor" to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
