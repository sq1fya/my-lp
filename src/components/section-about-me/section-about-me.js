import React, { Component } from "react";
import logo from "../../gfx/logo.svg";
import lukasz from "../../gfx/lukasz.png";

class SectionAboutMe extends Component {
  render() {
    return (
      <section className="position-relative section-about-me background-image container-fluid h-auto">
        <div className="position-relative position-absolute background-image-media row" style={{overflow: "auto", width: "50%", top: "0", left: "0", bottom: "0", right: "0", margin:"auto"}}> <img className="" src={lukasz} alt="lukasz"></img></div>
        <div className="row">
          <div className="container col-12 col-lg-9 m-md-0 m-lg-auto p-0 pl-lg-3">
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
                <div className="left-box col-lg-4 text-white">
                  <div className="title-box justify-content-center">
                    <h6 className="title mt-0">Jestę frontendowcę</h6>
                  </div>
                  <div className="inside-text text-center text-lg-left">
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
                    <div className="js-mini bg-js d-block d-lg-none mx-auto m-0" />
                  </div>
                </div>
                <div className="js sticky-top bg-js d-none d-lg-block" />
              </div>
              <div className="right-box mt-0 col-lg-6 float-right text-white">
                <div className="right-box--main">
                  <div className="react-logo position-absolute d-none d-xl-block">
                    <img src={logo} className="App-logo" alt="react-logo" />
                  </div>
                  <div className="title-box position-relative">
                    <h6 className="title">Jestę developerę</h6>
                  </div>
                  <div className="react-logo-mini rotate-center d-xl-none d-block w-25 mx-auto">
                    <img src={logo} className="App-logo" alt="react-logo" />
                  </div>
                  <div className="inside-text text-center text-lg-left p-md-2 pb-md-4">
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
