import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Footer/Footer.jsx';
import NewFooter from '../NewFooter/NewFooter.jsx';
import Pagination from '../PaginationLinks.jsx';
import ProfileImage from "../../../public/assets/git_dp.jpg?url"
import Resume from "../../../public/assets/UpdatedResume.pdf"

const Home = () => {

  const nextPage = "/about";
  const prevPage = "/";

  return (
    <div>
      <Navbar/>
      <section className="home">
        <div className="container-lg"> 
          <div className="row min-vh-80 align-items-center align-content-center">
            <div className="col-md-5 order-md-last" style={{ marginTop: '40px' }}>
              <div className="home-img text-center">
                <img
                  id="myProfileImage"
                  src={ProfileImage}
                  alt="Profile Dp"
                  className="rounded-circle img-fluid goodlook"
                />
              </div>
            </div>
            <div id="about" className="col-md-6 order-md-first goodlook">
              <div className="home-text goodlook">
                <h2 className="helloclass textcolor">Hello, I'm</h2>
                <h1 className="textcolorName">Shubham Kumar Gupta</h1>
                <h2 className="textcolor">Web Developer</h2>
                <p className="aboutText paraText">
                  A Bachelor of Computer Application student with a passion for technology.
                </p>
                <div className="social-iconss">
                  <a href="https://github.com/shubGupta10" className="hoverEffect">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a href="https://www.linkedin.com/in/shubham-kumar-gupta-30a916234/" className="hoverEffect">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <a href="https://twitter.com/i_m_shubham45" className="hoverEffect">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://www.instagram.com/" className="hoverEffect">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  
                </div>
                <a
                  className="resumeBtn"
                  href={Resume}
                  target="_blank"
                  id="viewButton"
                >
                  Download Resume
                </a>
              </div>
              <div>
                <img src="next" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pagination prevPage={prevPage} nextPage={nextPage}/>
      <Footer/>
      <NewFooter/>
    </div>
  );
}

export default Home;
