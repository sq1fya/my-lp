import React, { Component } from "react";
import logo from "./logo.svg";
import "./Logo.scss";
import "./main.scss";

class App extends Component {
  render() {
    return (
      <section className="container-fluid image-lukasz">
        <div className="row">
          <div className="container">
            <div className="row">
              <header>
                <div className="col" />
                <nav className="nav-bar">
                  <ul className="list-group">
                    <li><strong>Umiejętności</strong></li>
                    <li><strong>Kontakt</strong> </li>
                  </ul>
                </nav>
              </header>
            </div>
            <div className="row d-flex align-items-end ">
              <div className="left-box col-4">
                <div className="title-box justify-content-center sticky-top">
                  <h6 className="title "><strong>Jestę frontendowcę</strong></h6>
                </div>
                <div className="inside-text">
                  <h3>
                    <strong>Cześć!</strong>
                  </h3>
                  <p className="mb-auto p-3">
                    Jestem web developerem i&nbsp;rozwijam się na ścieżce javascriptu
                  </p>
                  <hr className="border-white" />
                  <h3>
                    <strong>Mocne strony:</strong>
                  </h3>
                  <ul className="list-group mb-auto p-3">
                    <li className="">- React</li>
                    <li className="">- Javascript</li>
                    <li className="">- RWD</li>
                  </ul>
                </div>
              </div>
              <div className="js sticky-top mr-auto p-2">
                <span className="js-logo-box ">
                  <strong>JS</strong>
                </span>
              </div>
            </div>
            <div>
                <div className="react-logo float-right">
                  <img src={logo} className="App-logo sticky-top" alt="logo" />
                </div>
              <div className="right-box col-4 float-right">
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
