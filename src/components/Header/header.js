import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
                <Link className="navbar-brand js-scroll-trigger" href="/">My Development Portfolio</Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">    
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link js-scroll-trigger" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link js-scroll-trigger" to="/">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link js-scroll-trigger" to="/ProjectGallery">Project Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link js-scroll-trigger" to="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Header;