import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Skills.css";
import htmlicon from '../../../public/assets/icons/html-icon.svg';
import cssicon from "../../../public/assets/icons/css-icon.svg";
import js from "../../../public/assets/icons/javascript.svg";
import react from "../../../public/assets/icons/reactjs.svg";
import MaterialUI from "../../../public/assets/icons/materialUI.svg";
import firebase from "../../../public/assets/icons/firebase.svg";
import tailwind from "../../../public/assets/icons/tailwind.svg";
import Bootstrap from "../../../public/assets/icons/bootstrap.svg"
import redux from "../../../public/assets/icons/redux.svg";
import java from "../../../public/assets/icons/java.svg";
import nodejs from "../../../public/assets/icons/nodejs.svg";
import express from "../../../public/assets/icons/express.svg";
import mongodb from "../../../public/assets/icons/mongodb.svg";
import github from "../../../public/assets/icons/github.svg";
import git from "../../../public/assets/icons/git.svg";
import vercel from "../../../public/assets/icons/vercel.svg";
import render from "../../../public/assets/icons/render.svg";
import netlify from "../../../public/assets/icons/netlify.svg";
import socketio from "../../../public/assets/icons/socketio.svg"
import Footer from '../Footer/Footer';

import Pagination from '../PaginationLinks';
import NewFooter from '../NewFooter/NewFooter';

const Skills = () => {

    const nextPage = "/projects"; 
    const prevPage = "/about";


    const languages = [
        {name: 'JavaScript', icon: js},
        {name: 'Java', icon: java}
    ];

    const frontendSkills = [
        { name: 'HTML', icon: htmlicon },
        { name: 'CSS', icon: cssicon },
        { name: 'JavaScript', icon: js },
        { name: 'React Js', icon: react },
        { name: 'MaterialUI', icon: MaterialUI },
        { name: 'FireBase', icon: firebase },
        { name: 'Tailwind CSS', icon: tailwind },
        { name: 'Bootstrap', icon: Bootstrap },
        { name: 'Redux', icon: redux }
    ];

    const backendSkills = [
        { name: 'Node js', icon: nodejs },
        { name: 'Express Js', icon: express },
        { name: 'MongoDB', icon: mongodb },
        {name: 'Socket.io', icon: socketio},
    ];

    const developerToolsDeployment = [
        { name: 'Github', icon: github },
        { name: 'Git', icon: git },
        { name: 'Vercel', icon: vercel },
        { name: 'Render', icon: render },
        { name: 'Netlify', icon: netlify }
    ];

    const renderSkills = (skills) => {
        return skills.map((skill, index) => (
            <div key={index} className=" col-6 col-md-4 col-lg-2 skillsection mb-4">
                <div className="skills-section p-3 text-center">
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="skillsImage img-fluid" />}
                    <p className="mt-2">{skill.name}</p>
                </div>
            </div>
        ));
    };

    return (
        <div>
            <Navbar />
            <section className="container mt-5">
                <div className='mb-5 text-center'>
                    <h2 className='textHead'>Here you can checkout my skills</h2>
                </div>
                <div className="mb-5">
                    <h2 className='textmain'>Languages:</h2>
                    <div className="row">
                        {renderSkills(languages)}
                    </div>
                </div>
                <div className="mb-5">
                    <h2 className='textmain'>Frontend:</h2>
                    <div className="row">
                        {renderSkills(frontendSkills)}
                    </div>
                </div>
                <div className="mb-5">
                    <h2 className='textmain'>Backend:</h2>
                    <div className="row">
                        {renderSkills(backendSkills)}
                    </div>
                </div>
                <div className="mb-5">
                    <h2 className='textmain'>Tools and Deployment:</h2>
                    <div className="row">
                        {renderSkills(developerToolsDeployment)}
                    </div>
                </div>
            </section>
            <Pagination prevPage={prevPage} nextPage={nextPage} />
            <NewFooter/>
            <Footer/>
        </div>
    );
}

export default Skills;
