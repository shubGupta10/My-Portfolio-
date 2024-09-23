import React from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer/Footer";
import Pagination from "../PaginationLinks";
import NewFooter from "../NewFooter/NewFooter";
import location from "../../../public/assets/Images/location.svg"
import email from "../../../public/assets/Images/email.svg"

const Contact = () => {

  const nextPage = "/"
  const prevPage = "/projects"

  return (
    <>
      <Navbar />
      <div
      className="mainDiv container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          color: "white",
        }}
      >
        <div
          className="innerSecDiv"
          style={{
            flex: 1,
            marginRight: "20px",
            margin: "auto",
            marginLeft: "40px",
            fontSize: "20px",
          }}
        >
          <h2 className="connectText" >Connect with me</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src={location}
              alt="Location"
              className="ContactImg"
            />
            <span>Planet Earth</span>
            <span role="img" aria-label="earth" style={{ marginLeft: "5px" }}>
              🌍
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              className="ContactImg"
              src={email}
              alt="Email"
              style={{ marginRight: "10px" }}
            />
            <a
              href="mailto:shubhamkgupta720@gmail.com"
              style={{ color: "white", textDecoration: "none"  }}
            >
              shubhamkgupta720@gmail.com
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="ContactIcon" />
            </a>
            <a
              href="https://github.com/shubGupta10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="ContactIcon" />
            </a>
            <a href="https://x.com/i_m_shubham45" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="ContactIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-kumar-gupta-30a916234/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="ContactIcon" />
            </a>
          </div>
        </div>
        <section id="contactMe" style={{ flex: 1, padding: "auto" }}>
          <div
            className="container goodlook justify-content-center"
            style={{
              margin: "auto",
              color: "aqua",
              fontSize: "20px",
              marginTop: "20px",
              maxWidth: "auto",
              marginBottom: "50px",
            }}
          >
            <h2 className="text-center mb-4 fs-15 goodlook">Contact Me</h2>
            <form
              className="row g-3 goodlook"
              action="https://formspree.io/f/mleqwkjy"
              method="POST"
              id="myForm"
            >
              <div className="col-12">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  required
                  style={{ backgroundColor: "#132537", color: "white" }}
                />
              </div>
              <div className="col-12">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  required
                  style={{ backgroundColor: "#132537", color: "white" }}
                />
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  style={{ backgroundColor: "#132537", color: "white" }}
                />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  required
                  style={{ backgroundColor: "#132537", color: "white" }}
                />
              </div>
              <div className="col-12 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn  btn-lg"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Pagination prevPage={prevPage} nextPage={nextPage}/>
        <NewFooter/>
        <Footer/>
    </>
  );
};

export default Contact;
