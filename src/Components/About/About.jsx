import React from 'react';
import "./About.css"
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Footer/Footer';
import NewFooter from '../NewFooter/NewFooter';
import Pagination from '../PaginationLinks';

const About = () => {

  const nextPage = "/skills"
  const prevPage = "/";

  return (
    <>
    <Navbar/>
    <div>
      <section id="aboutNew" className=" min-vh-100 aboutNew">
        <div className="container-fluid  aboutContainer">
          <div className="container-lg">
            <div className="row  align-items-center align-content-center">
              <div className="col-md-5 order-md-first">
                <div className="about-img text-center Mainimg">
                  <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149387396.jpg" alt="Your Photo" className="rounded-circle img-fluid goodlook" />
                </div>
              </div>
              <div className="col-md-7 order-md-last">
                <div className="about-text">
                  <h2 className="aboutme goodlook"><span>A</span>bout <span>M</span>e</h2>
                  <p className="AboutText goodlook">I am a dedicated web developer currently pursuing a Bachelor of Computer Applications degree. With a good foundation in HTML, CSS, and JavaScript, I specialize in crafting responsive and user-friendly websites. I am passionate about creating engaging online experiences and thrive on the challenges of web development.
                    In addition to my technical skills, I have a keen eye for design and strive to create visually appealing interfaces that leave a lasting impression on users. I am proficient in using frameworks and technologies such as the MERN (MongoDB, Express.js, React.js, Node.js) stack to build full-stack web applications.</p>
                </div>
                <div className="social-icons">
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
              </div>
            </div>
          </div>
        </div>
      </section>


{/* education section */}
      <section id="eduSec" className="min-vh-80" style={{ marginTop: "50px", padding: "40px", marginBottom: "40px", backgroundColor: "rgb(9, 9, 44)" }}>
  <div className="text-center" style={{ color: "yellow", fontSize: "70px", marginBottom: "20px" }}>
    <div id="EducationText" className="goodlook">Education</div>
  </div>
  <div className="container goodlook" id="profile-container">
    <div id="education-card">
      <img id="avatar" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/BBDU_Main_Building.jpg" alt="avatar" style={{ objectFit: "contain", backgroundColor: "#9a9fa2", opacity: 1 }} />
      <div id="info">
        <h5 id="name" style={{ color: "aqua" }}>Babu Banarasi Das University (2021-2024)</h5>
        <p id="activity">Bachelor of Computer Applications</p>
        <p className="tagline">Average CGPA: 8.5</p>
      </div>
    </div>
  </div>
</section>


    </div>
    <Pagination nextPage={nextPage} prevPage={prevPage}/>
    <NewFooter/>
    <Footer/>
    </>
  );
};

export default About;
