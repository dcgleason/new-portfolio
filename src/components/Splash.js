import React from "react";

function Splash() {
    return (
        <div>
        {/* Start Splash Section  */}
        <a className="anchor" id="home" />
        <div id="splash" className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center typewriter">
              <h1>Hi, I'm Dan Gleason.</h1>
              <hr />
              <p className="typewriter">
                Full Stack Engineer ;  <a className="resume" href="https://docs.google.com/document/d/1fliqkVw-Dl5DH0lNOvzOcoEvW8gz_ChUBTg0QFZFVLg/edit?usp=sharing" target="_blank"> My Resume</a>
              </p>
              <p>
                <a href="https://github.com/dcglesaon" target="_blank"><i className="fa fa-github-square fa-2x" /></a>
                <a href="https://linkedin.com/in/dcgleason" target="_blank"><i className="fa fa-linkedin-square fa-3x" /></a>
                <a href="https://twitter.com/teachcodehq" target="_blank"><i className="fa fa-twitter-square fa-2x" /></a>
              </p>
            </div>
          </div>
        </div>
        {/* End Splash Section  */}
      </div>
    );
  }
  
  export default Splash;

