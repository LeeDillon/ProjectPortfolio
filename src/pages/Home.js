import React from "react";

function Home() {
  return (
    <div>
        <header className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 flex-jumbo text-center">Lee Dillon - Software Engineer</h1>
                <div className="flex">
                    <p className="lead flex-jumbo text-center">Thank you for visiting, you can check out my portfolio of work
                        below!</p>
                    <img src="../../images/profile-pic.png" alt="My profile pic" className="profile-pic flex-jumbo"/>
                </div>
            </div>
        </header>
        <div className="col-lg-4 col-md-6 col-sm-12 page-section" id="about">
            <h2 id="about-title">About Me</h2>
            <br/>
            <p>I am a financial professional with over seven years of experience working with
                customers and
                delivering results
                across
                different areas of the NatWest Group. In 2021 I went through a reskilling program to become a
                Software
                Engineer,
                I love
                my new career and am always looking for opportunities to learn and grow.</p>
        </div>
    </div>
  );
}

export default Home;