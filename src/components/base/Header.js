import React from 'react';
// import myPhoto from '../images/head_photo.jpg';
import { NavLink, useLocation } from 'react-router-dom'


const Header = () => {

    let location = useLocation()
    // use floating home button

    return (
        <header>
            <nav className="my-nav">
                <div className="navigation">
                    {/* <NavLink to="/">
                        <div className="inner-side">
                            <img src={myPhoto} alt="developer" />
                            <div className="img-overlay"></div>
                        </div>
                    </NavLink> */}
                    <NavLink activeClassName='active' className="menu-item" to={
                        {
                            pathname: '/about',
                            state: {
                                from: location.pathname
                            }
                        }
                    }>
                        About
                    </NavLink>
                    <NavLink activeClassName='active' className="menu-item" to={
                        {
                            pathname: '/works',
                            state: {
                                from: location.pathname
                            }
                        }
                    }>
                        Work
                    </NavLink>
                    <NavLink activeClassName='active' className="menu-item" to={
                        {
                            pathname: '/contact',
                            state: {
                                from: location.pathname
                            }
                        }
                    }>
                        Contact
                    </NavLink>
                    {/* <div >
                        <a href="https://github.com/descifle"><i className="github square icon big"></i></a>
                        <a href="https://www.linkedin.com/in/giovanni-headley/"><i className="linkedin square icon big"></i></a>
                    </div> */}
                </div>
            </nav>
        </header>
    )
}

export default Header;