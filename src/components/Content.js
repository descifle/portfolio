import React from 'react';
import './content.scss';
import WebCard from './WebCard';
import { NavLink } from 'react-router-dom';
import myPhoto from '../images/head_photo.jpg';
import site2 from '../images/site2.png';
import mytube from '../images/mytube.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Content = () => {
    return (
        <div className="container main">
                    <div data-aos="fade-left" className="main-txt text-center pt-5">
                        <h1>I'm Giovanni Headley</h1>
                        <p data-aos="fade-in"  data-aos-delay="800" className="my-3">Full Stack Web Developer</p>
                    </div>
                    <div className="main-photo mx-auto">
                        <img className="shadow-lg" src={myPhoto} alt="developer" />
                    </div>
                    <div className="row">
                        <div className="col-12 mb-5">
                            <div className="blurb">
                            <h2 className="mt-3">Giovanni Headley</h2>
                            </div>
                            <hr />
                            <div className="blurb text-center">
                                <p>
                                    Full Stack Web Developer, Specializing in MERN development, Object-oriented and user-centered design
                                </p>
                                {/* <p>
                                    I also have learned additional skills that were picked up on my journey in development including but not limited to.
                                </p> */}
                                <div className="main-skills row">
                                    <div className="main-skills_info col-3">
                                        Javascript
                                    </div>
                                    <div className="main-skills_progress col-9">
                                        <div>
                                            Ajax, API's, Object-Oriented
                                        </div>
                                    </div>
                                    <div className="main-skills_info col-3">
                                        Css3
                                    </div>
                                    <div className="main-skills_progress col-9">
                                        <div>
                                            Sass, Animations, Flex/Grid, Mobile-friendly, User-friendly
                                        </div>
                                    </div>
                                    <div className="main-skills_info col-3">
                                        Php
                                    </div>
                                    <div className="main-skills_progress col-9">
                                        <div>
                                            Server, Database interaction, Sessions, Encode(js)
                                        </div>
                                    </div>
                                    <div className="main-skills_info col-3">
                                        MERN
                                    </div>
                                    <div className="main-skills_progress col-9">
                                        <div>
                                            REST, Api's, Class, Object-Oriented, Components, Server, Database
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="mt-5">Recent Work</h2>
                        <NavLink className="btn-link my-4" to="/projects">PROJECTS<i className="ml-2 icon arrow right"></i></NavLink>
                        <div className="project-cont my-4">
                            <WebCard
                                projectName='MyTube'
                                website='https://mytubemern.herokuapp.com/'
                                projectType='react icon large'
                                projectSkill='React, MERN, Js'
                                projectInfo=''
                                image={mytube}
                            />
                            <WebCard
                                projectName='Sttimtennis'
                                website='http://sttimtennisclub.com'
                                projectType='php icon large'
                                projectSkill='Php, Mysql, Js, Css'
                                projectInfo=''
                                image={site2}
                            />
                        </div>
                    </div>
                </div>
    )
}

export default Content;