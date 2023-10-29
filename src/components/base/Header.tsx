import React from 'react';
import { NavLink } from 'react-router-dom'


const Header = () => {

    return (
        <header>
            <nav className="my-nav">
                <div className="navigation">
                                        <NavLink className="menu-item" to={{
                            pathname: '/',
                        }}>
                        Home
                    </NavLink>
                    <NavLink className="menu-item" to={{
                            pathname: '/about',
                        }}>
                        About
                    </NavLink>
                    <NavLink className="menu-item" to={
                        {
                            pathname: '/contact',
                        }
                    }>
                        Contact
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;