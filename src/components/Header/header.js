import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg p-2" id="page-top">
      <NavLink className="nav-link js-scroll-trigger" to="/">
        Lee Dillon Portfolio 2023
      </NavLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto ">
          <li class="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/">
              About
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              className="nav-link js-scroll-trigger"
              to="/ProjectGallery"
            >
              Project Gallery
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/Contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
