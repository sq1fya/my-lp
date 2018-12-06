import React, { Component } from "react";
import logo from "./logo.svg";
import "./Logo.scss";
import "./main.scss";

class App extends Component {
  render() {
    return (
      <section className="container-fluid image-lukasz">
        <div className="row ">
          <div className="container">
            <div className="row justify-content-end">
              <header>
                <div className="col ">
                  <nav className="nav-bar ">
                    <ul className="nav ">
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
                </div>
              </header>
            </div>
            <div className="row d-flex align-items-end">
              <div className="left-box col-4">
                <div className="title-box justify-content-center sticky-top">
                  <h6 className="title">Jestę frontendowcę</h6>
                </div>
                <div className="inside-text">
                  <h3>Cześć!</h3>
                  <p className="">
                    Jestem web developerem i&nbsp;rozwijam się na ścieżce
                    javascriptu
                  </p>
                  <hr className="border-white" />
                  <h3>Mocne strony:</h3>
                  <ul className="list-group">
                    <li className="">- React</li>
                    <li className="">- Javascript</li>
                    <li className="">- RWD</li>
                  </ul>
                </div>
              </div>
              <div className="js sticky-top mr-auto p-3">
                JS
              </div>
            </div>
            <div className="right-box col-6 float-right position-relative">
              <div className="react-logo float-right position-absolute">
                <img src={logo} className="App-logo sticky-top" alt="logo" />
              </div>
              <div className="title-box justify-content-center">
                <h6 className="title sticky-top">
                  Jestę developerę
                </h6>
              </div>
              <div className="inside-text">
                <h3>Łukasz Górecki</h3>
                <p className="mb-auto">Junior frontend developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
