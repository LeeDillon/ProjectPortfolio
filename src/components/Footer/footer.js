import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <p>&copy; Thanks for visiting!</p>
            <Link href="#page-top">
                <button type="button" id="footerButton">
                    Take me back to the top
                    <i className="fas fa-bars"></i>
                </button>
            </Link>
        </div>
    </footer>
  );
}

export default Footer;