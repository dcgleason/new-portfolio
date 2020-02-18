import React from "react";

function Contact() {
    return (
        <div>
        <a className="anchor" id="contact-link" />
        <div id="contact" className="container-fluid text-center">
          <h1>Contact</h1>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h2>Social</h2>
                <a href="https://twitter.com/teachcodehq">
                  <span className="fa-stack fa-3x">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-twitter fa-stack-1x fa-inverse" />
                  </span>
                </a>
                <a href="https://linkedin.com/in/dcgleason">
                  <span className="fa-stack fa-3x">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
                  </span>
                </a>
                <a href="https://github.com/dcgleason">
                  <span className="fa-stack fa-3x">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-github-alt fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </div>
              <div className="col-lg-4">
                <h2>Location</h2>
                <address>
                  Boston, MA
                </address>
              </div>
              <div className="col-lg-4">
                <h2>Communication</h2>
                <a href="mailto:danny.c.glesaon@gmail.com">
                  <span className="fa-stack fa-3x">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-envelope fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;