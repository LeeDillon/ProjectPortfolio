import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="navbar navbar-expand-lg fixed-bottom mt-auto">
      <div className="container">
        <span>&copy; Thanks for visiting!</span>
        <NavLink to="#page-top">
          <button class="btn btn-sm btn-outline-secondary" type="button">
            Take me back to the top
            <i className="fas fa-bars"></i>
          </button>
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
