import React, { Component } from "react";
import logo from "../../gfx/logo.svg";

class SectionAboutMe extends Component {
  render() {
    return (
      <section className="section-about-me background-image container-fluid">
        <div className="row">
          <div className="container">
            <header>
              <nav className="navbar nav-bar justify-content-end">
                <ul className="nav">
                  <li className="nav-item">
                    <button className="nav-link" href="#">
                      Umiejętności
                    </button>
                  </li>
                  <li>
                    <button className="nav-link" href="#">
                      Kontakt
                    </button>
                  </li>
                </ul>
              </nav>
            </header>
            <div className="d-flex flex-column-reverse d-lg-block">
            <div className="row d-flex align-items-end">
              <div className="left-box col-4 text-white">
                <div className="title-box justify-content-center">
                  <h6 className="title">Jestę frontendowcę</h6>
                </div>
                <div className="inside-text">
                  <div className="inside-text--box">
                    <h3>Cześć!</h3>
                    <p>
                      Jestem web developerem i rozwijam się na ścieżce
                      javascriptu
                    </p>
                    <hr className="border-white" />
                    <h3>Mocne strony:</h3>
                    <ul className="list-group">
                      <li>- React</li>
                      <li>- Javascript</li>
                      <li>- RWD</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="js sticky-top bg-js">
                <p>JS</p>
              </div>
            </div>
            <div className="right-box mt-0 col-6 float-right text-white">
              <div className="right-box--main">
                <div className="react-logo position-absolute d-none d-lg-block">
                  <img src={logo} className="App-logo" alt="react-logo" />
                </div>
                <div className="title-box position-relative">
                  <h6 className="title">Jestę developerę</h6>
                </div>
                <div className="inside-text">
                  <h3>Łukasz Górecki</h3>
                  <p className="mb-auto">Junior frontend developer</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SectionAboutMe;
