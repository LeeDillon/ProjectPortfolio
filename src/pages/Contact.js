import React from "react";
import { Link} from 'react-router-dom';

function Contact() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 page-section" id="contact">
      <h1 className="Title">Contact Me</h1>
      <br />
      <div>
        <ul>
          <li>
            <Link to="mailto:lee_dillon@hotmail.com">
              E-mail: lee_dillon@hotmail.com
            </Link>
          </li>
          <li>
            <Link to="tel:07779245187">Phone Number: 07779245187</Link>
          </li>
          <li>
            <Link to="https://github.com/LeeDillon">GitHub</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/lee-dillon-8a46891b1/">
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;