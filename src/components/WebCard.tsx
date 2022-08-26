import React from 'react';
import './webcard.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

type Props = {
    image: string,
    projectName: string,
    website: string,
    projectSkill: string,
    projectType: string
}

const WebCard = (props: Props) => {
    return (
        <div className="card rounded" data-aos="zoom-in-down" data-aos-delay="150">
            <div className="image">
                <img src={props.image} alt="project"></img>
            </div>
            <div className="main-text">
                <h2 className="header">{props.projectName}</h2>
                <div className="meta">
                <a className="btn-site" href={props.website} target="_blank" rel="noopener noreferrer">Visit Me</a>
                </div>
            </div>
            <div className="secondary-text">
                <span className="right floated secondary-text_info">
                    Built with <code>{props.projectSkill}</code>
                </span>
                <span>
                <i className={props.projectType}></i>
                </span>
            </div>
        </div>
    )
}


export default WebCard;