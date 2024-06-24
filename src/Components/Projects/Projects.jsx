import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Projects.css"
import Footer from '../Footer/Footer'
import Pagination from '../PaginationLinks'
import NewFooter from '../NewFooter/NewFooter'
import blogPoint from "../../../public/assets/Images/blogPoint.png?url"
import EduHub from "../../../public/assets/Images/EduHub.png?url"
import pinfluence from "../../../public/assets/Images/pinfuence.png?url"
import InstaClone from "../../../public/assets/Images/Instagram Clone.png?url"
import Todo from "../../../public/assets/Images/Todo.png?url"
import portfolio from "../../../public/assets/Images/my-Portfolio.png?url"

const Projects = () => {

  const nextPage = "/contact"
  const prevPage = "/skills"

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <section className="projectcontainer" id="projectSection">
        <h1 id="projectHead" className="goodlook">Projects</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4 goodlook">
          {/* Project 1 */}
          <div className="col">
            <div className="card" style={{ width: '80%' }} id="cardNew">
              <img src={EduHub} className="card-img-top" alt="Project 1 Image" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'aqua' , fontSize: '2rem' }}>EduHub - A EdTech App</h5>
                <p className="card-text">Front-end: React Js <br /> Backend: Firebase + FireStore</p>
                <p className="card-text">A EdTech platform, where people can learn and grow.</p>
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/shubGupta10/EduHUB" className="btn btn-primary">Code</a>
                  <a href="https://eduhub-plus.vercel.app/" className="btn btn-secondary">Demo</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: '80%' }} id="cardNew">
              <img src={blogPoint} className="card-img-top" alt="Project 1 Image" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'aqua' , fontSize: '2rem' }}>Blog Point</h5>
                <p className="card-text">Front-end: React Js <br /> Backend: Appwrite</p>
                <p className="card-text">A Blog Web App where people can write blogs seamlessly.</p>
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/shubGupta10/BlogPoint-" className="btn btn-primary">Code</a>
                  <a href="https://blog-point.vercel.app/" className="btn btn-secondary">Demo</a>
                </div>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="col">
            <div className="card" style={{ width: '80%' }}>
              <img src={pinfluence} className="card-img-top" alt="Project 5 Image" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'aqua', fontSize: '2rem' }}>Pinfluence - WebApp</h5>
                <p className="card-text">Tech used: MERN <br /> Cloud Service: Mongodb Atlas</p>
                <p className="card-text">A WebApp where people can explore their ideas!!</p>
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/shubGupta10/Pinfluence" className="btn btn-primary">Code</a>
                  <a href="https://pinfluence-a6jx.onrender.com/" className="btn btn-secondary">Demo</a>
                </div>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="col">
            <div className="card" style={{ width: '80%' }}>
              <img src={InstaClone} className="card-img-top" alt="Project 3 Image" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'aqua', fontSize: '2rem' }}>DoSchedulise</h5>
                <p className="card-text"><span className='fw-bold'>Tech used:</span> MERN, WebSocket(Socket.io)</p>
                <p className="card-text">Appointment Booking and Scheduling App with live chat feature.</p>
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/shubGupta10/DoSchedulise" className="btn btn-primary">Code</a>
                  <a href="https://do-schedulise.vercel.app" className="btn btn-secondary">Demo</a>
                </div>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div className="col">
            <div className="card" style={{ width: '80%' }}>
              <img src={Todo} className="card-img-top" alt="Project 4 Image" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'aqua', fontSize: '2rem' }}>BookBlaze - A Book Store</h5>
                <p className="card-text">Tech used: React Js + FireBase</p>
                <p className="card-text">A Simple Book store where people can buy and invest in the books.</p>
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/shubGupta10/BookBlaze" className="btn btn-primary">Code</a>
                  <a href="https://book-blaze.vercel.app" className="btn btn-secondary">Demo</a>
                </div>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div className="col">
            <div className="card" style={{ width: '80%' }}>
              <img src={portfolio} className="card-img-top" alt="Project 2 Image" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'aqua', fontSize: '2rem' }}>My Portfolio</h5>
                <p className="card-text">Tech used: React Js<br /> CSS framework: Bootstrap</p>
                <p className="card-text">A Portfolio Website, where you get to know more about me</p>
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/shubGupta10/My-Portfolio-" className="btn btn-primary">Code</a>
                  <a href="https://my-portfolio-10.vercel.app/" className="btn btn-secondary">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pagination prevPage={prevPage} nextPage={nextPage}/>
      <NewFooter/>
      <Footer/>
    </div>
  )
}

export default Projects