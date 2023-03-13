import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Contact() {
  return (    
            <div className="col-lg-4 col-md-6 col-sm-12 page-section" id="contact">
                <h2>Contact Me</h2>
                <br/>
                <nav>
                    <ul>
                        <li>
                            <Link href="mailto:lee_dillon@hotmail.com">E-mail: lee_dillon@hotmail.com</Link>
                        </li>
                        <li>
                            <Link href="">Phone Number: 07779245187</Link>
                        </li>
                        <li>
                            <Link href="https://github.com/LeeDillon">GitHub</Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/lee-dillon-8a46891b1/">LinkedIn</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
}

export default Contact;