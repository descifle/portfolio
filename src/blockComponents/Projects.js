import React, { useState } from 'react';
import WebCard from './WebCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import site1 from '../images/site1.png';
import site2 from '../images/site2.png';
import site3 from '../images/site3.png';
import site4 from '../images/site4.png';
import site5 from '../images/site5.png';
import site6 from '../images/site6.png';
import site7 from '../images/site7.png';
import mytube from '../images/mytube.png';
import foodPlanner from '../images/site9.png'
// import site8 from '../images/site8.png';






const Projects = () => {
    const [filter, setFilter] = useState('default');

    AOS.init();

    const cards = [
        {
            projectName :'Hangman Game',
            website :'https://descifle.github.io/hangman-game/',
            projectType :'js icon large',
            projectSkill : 'Js, Css, html',
            filter : 'apps',
            image : site6
        },
        {
            projectName :'Email Invoice',
            website :'https://cashslap.netlify.app/',
            projectType :'html5 icon large',
            projectSkill : 'FFE, Html, Css',
            filter  : 'emails',
            image : site5
        },
        {
            projectName : 'Notes App',
            website : 'https://descifle.github.io/notes-app/index.html',
            projectType : 'js icon large',
            projectSkill :  'Css, Js',
            filter  :  'apps',
            image : site7
        },
        {  
            projectName : 'Email Newsletter',
            website : 'https://newsletteremailxx.netlify.app/',
            projectType : 'html5 icon large',
            projectSkill :  'FFE, Html, Css',
            filter  :  'emails',
            image : site4
        },
        {
            projectName: 'Uhost',
            website: 'https://descifle.github.io/Uhost/index.html',
            projectType: 'css3 alternate icon large',
            projectSkill:  'Css, Html, Js',
            filter :  'websites',
            image: site3

        },
        {
            projectName : 'Mcdowell',
            website : 'https://mcdowellschimney.com/',
            projectType : 'js icon large',
            projectSkill :  'Css, Html, Js',
            filter  :  'websites',
            image : site1
        },
        {
            projectName : 'Sttimtennis',
            website : 'http://sttimtennisclub.com',
            projectType : 'php icon large',
            projectSkill :  'Php, Mysql, Js, Css',
            filter  :  'websites apps',
            image : site2
        },
        {
            projectName : 'MyTube',
            website : 'https://mytubemern.herokuapp.com/',
            projectType : 'react icon large',
            projectSkill : 'React, MERN, Js',
            filter : 'websites apps',
            image : mytube
        },
        {
            projectName : 'Food Planner',
            website : 'https://food-planner-elite.herokuapp.com/',
            projectType : 'react icon large',
            projectSkill : 'React, MERN, Js',
            filter : 'websites apps',
            image : foodPlanner
        }
    ]

    const realCards = cards.reverse()

    

    const renderCard = realCards.map((card) => {
        if(filter === 'default') {
            return <WebCard key={card.projectName} projectName={card.projectName} website={card.website} projectType={card.projectType} projectSkill={card.projectSkill} image={card.image} />
        } else if (card.filter.includes(filter)) {
            return <WebCard key={card.projectName} projectName={card.projectName} website={card.website} projectType={card.projectType} projectSkill={card.projectSkill} image={card.image} />
        } else {
            return false;
        }
    })

    return (
        <div id="about" className="container-fluid main">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="text-center">Projects</h1>
                        
                        <div className="ui four item menu mt-4">
                            <a onClick={() => setFilter('default')} href="#emails" className={filter === "default" ? "bg-danger text-white item" : "item"} >Show All</a>
                            <a onClick={() => setFilter('apps')} href="#apps" className={filter === "apps" ? "bg-danger text-white item" : "item"}>Apps</a>
                            <a onClick={() => setFilter('websites')} href="#websites" className={filter === "websites" ? "bg-danger text-white item" : "item"}>Websites</a>
                            <a onClick={() => setFilter('emails')} href="#emails" className={filter === "emails" ? "bg-danger text-white item" : "item"}>Emails</a>
                        </div>
                        <p className="text-center bot-shadow">Sort project by type</p>
                        <div className="ui link cards justify-content-center pt-3">
                        {renderCard}
                        </div>
                    </div>
                    <hr />
                    <div className="my-5 col-12">
                        <h1 className="text-center">Skills</h1>
                        <div>
                            <h3 className="my-3">Languages</h3>
                            <div className="skills">
                            <span>React</span>
                            <span>Express</span>
                            <span>Node</span>
                            <span>MongoDB</span>
                            <span>PHP</span>
                            <span>MySQL</span>
                            <span>Mobile Responsive</span>
                            <span></span>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-5">Technologies & tools</h3>
                            <div className="d-flex skills2">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;