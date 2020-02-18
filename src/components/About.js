import React from "react";

function About() {
    return (
        <div>
        <a className="anchor" id="about-link" />
        <div id="about" className="container-fluid text-center">
          <h1>About</h1>
          <hr />
          <div className="container">
            <div className="row row-eq-height">
              {/* <div class="col-lg-1"></div> */}
              <div className="col-lg-3">
                <img className="img-responsive img-circle center-block" src="https://i.ibb.co/YQ5Xs8c/headshot.png" alt="Dan-Gleason" />
              </div>
              <div id="white-bg" className="col-lg-8">
                <p>
                  Full Stack Developer, passionate about technology. Experienced in ReactJS, CSS, Javascript, Express, Postgres, Python, Django amoung other things. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;