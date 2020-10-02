import React from 'react';
import './webcard.scss';


const WebCard = (props) => {
    return (
        <div className="card rounded">
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