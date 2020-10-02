import React from 'react';
import myPhoto from '../images/head_photo.jpg';
import { NavLink } from 'react-router-dom';


const Header = () => {
  
    return (
        <header>
            <nav className="my-nav">
                <div className="navigation">
                    <NavLink to="/"><div className="inner-side"><img src={myPhoto} alt="developer" /><div className="img-overlay"></div></div></NavLink>
                    <NavLink activeClassName='active' className="menu-item" to="/about">
                        <i className="user icon big"></i>
                        <p>About</p>
                    </NavLink>
                    <NavLink activeClassName='active' className="menu-item" to="/projects">
                        <i className="folder open icon big"></i>
                        <p>Projects</p>
                    </NavLink>
                    <NavLink activeClassName='active' className="menu-item" to="/contact">
                        <i className="envelope icon big"></i>
                        <p>Contact</p>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;