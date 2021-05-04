import React from 'react';

const SkillBox = (props) => {
    return (
        <div className="ui move down reveal skill-box">
            <div className="visible content bg-white">
                <img alt="skill" src={props.image} className=""/>
            </div>
            <div className="hidden content">
                {props.skillDesc}
            </div>
        </div>
    )
}

export default SkillBox;