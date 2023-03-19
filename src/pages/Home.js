import React from "react";

function Home() {
  return (
    <div>
      <header className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="flex">
            <h1 className="display-4 flex-jumbo text-center">
              Lee Dillon - Software Engineer
            </h1>
            <p className="lead flex-jumbo text-center">
              Thank you for visiting, you can check out my portfolio of work in
              the Project Gallery!
            </p>
          </div>
          <br />
          <br />
          <div className="flex">
            <img
              src="../../images/profile-pic.png"
              alt="My profile pic"
              className="col-lg-4 col-md-6 col-sm-12 flex-jumbo"
            />
            <div
              className="col-lg-4 col-md-6 col-sm-12 flex-jumbo page-section"
              id="about"
            >
              <br />
              <h2 id="about-title">About Me</h2>
              <br />
              <p>
                I am a financial professional with over seven years of
                experience working with customers and delivering results across
                different areas of the NatWest Group. In 2021 I went through a
                reskilling program to become a Software Engineer, I love my new
                career and am always looking for opportunities to learn and
                grow.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
