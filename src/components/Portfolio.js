import React from "react";

function Portfolio() {
    return (
        <div>
        {/* Start portfolio Section  */}
        <a className="anchor" id="portfolio-link" />
        <div id="portfolio" className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>Portfolio</h1>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="thumbnail">
                      <a href="https://dcgleason.github.io/triviaGame" target="_blank">
                        <div className="thumbnail-hover text-center">
                          <i className="fa fa-eye fa-4x" />
                        </div>
                        <img className="img-responsive" src="https://i.ibb.co/dDqhmwN/Screen-Shot-2019-12-12-at-1-23-23-PM.png" />
                      </a>
                    </div>
                    <div className="caption">
                        <h3>Astronomy Trivia</h3>
                        <p>Built using: HTML, CSS, Vanilla JS</p>
                        <a href="https://github.com/dcgleason/triviaGame">Repo Link</a>
                      </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="thumbnail">
                      <a href="https://i.ibb.co/dJRDhhK/Screen-Shot-2019-12-24-at-11-13-28-AM.png" target="_blank">
                        <div className="thumbnail-hover text-center">
                          <i className="fa fa-eye fa-4x" />
                        </div>
                        <img className="img-responsive" src="https://i.ibb.co/dJRDhhK/Screen-Shot-2019-12-24-at-11-13-28-AM.png" />
                      </a>
                    </div>
                    <div className="caption">
                        <h3>Puppy Click Game</h3>
                        <p>Built Using: HTML, CSS, ReactJS</p>
                        <a href="https://github.com/dcgleason/click-game">Repo Link</a>
                      </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="thumbnail">
                      <a href="https://brewery-tour-manager.netlify.com/" target="_blank">
                        <div className="thumbnail-hover text-center">
                          <i className="fa fa-eye fa-4x" />
                        </div>
                        <img src="https://i.ibb.co/DrX175R/Screen-Shot-2020-01-10-at-11-21-18-AM.png" />
                      </a>
                    </div>
                    <div className="caption">
                        <h3>Brewery-Tour Manager</h3>
                        <p>Uses: HTML, CSS, ReactJS</p>
                        <a href="https://github.com/dcgleason/brewery-locator">Repo Link</a>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="thumbnail">
                      <a href="https://bundledev.netlify.com/" target="_blank">
                        <div className="thumbnail-hover text-center">
                          <i className="fa fa-eye fa-4x" />
                        </div>
                        <img src="https://i.ibb.co/cy04Dvg/Screen-Shot-2020-02-24-at-10-04-54-PM.png" />
                      </a>
                    </div>
                    <div className="caption">
                        <h3>Bundle</h3>
                        <p>Built Using: ReactJS, GatsbyJS, GraphQL, Apollo, Hasura</p>
                        <a href="https://github.com/dcgleason/bundle">Repo Link</a>
                      </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="thumbnail">
                      <a href="#" target="_blank">
                        <div className="thumbnail-hover text-center">
                          <i className="fa fa-eye fa-4x" />
                        </div>
                        <img src="https://i.ibb.co/ngxshwL/Screen-Shot-2020-02-02-at-7-59-22-PM.png" />
                      </a>
                      <div className="caption">
                        <h3>Placeholder</h3>
                        <p>...</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="thumbnail">
                      <a href="" target="_blank">
                        <div className="thumbnail-hover text-center">
                          <i className="fa fa-eye fa-4x" />
                        </div>
                        <img src="https://i.ibb.co/ngxshwL/Screen-Shot-2020-02-02-at-7-59-22-PM.png" />
                      </a>
                      <div className="caption">
                        <h3>Placeholder</h3>
                        <p>...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End portfolio Section  */}
      </div>
    );
  }
  
  export default Portfolio;
