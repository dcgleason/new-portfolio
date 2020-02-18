import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <span className="navbar-brand">Daniel Gleason</span>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#home">Home <span className="sr-only">(current)</span></a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#portfolio-link">Portfolio</a></li>
              <li><a href="#about-link">About</a></li>
              <li><a href="#contact-link">Contact</a></li>
            </ul>
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>
    );
  }
  
  export default NavBar;
  