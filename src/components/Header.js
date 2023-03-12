import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
                <Link className="navbar-brand js-scroll-trigger" href="#page-top">My Development Portfolio</Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link js-scroll-trigger" href="#work">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link js-scroll-trigger" href="#skills">Skills</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link js-scroll-trigger" href="#about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link js-scroll-trigger" href="#contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    );
}

export default Header;