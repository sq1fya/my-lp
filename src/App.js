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
                <nav>
                  <ul>
                    <li>Umiejętności</li>
                    <li>Kontakt</li>
                  </ul>
                </nav>
              </header>
            </div>
            <div className="row d-flex align-items-end ">
              <div className="left-box col-4">
                <div className="title-box justify-content-center sticky-top">
                  <h5 className="title ">Jestę frontendowcę</h5>
                </div>
                <div className="inside-text">
                  <h3>
                    <strong>Cześć!</strong>
                  </h3>
                  <p>
                    Jestem web developerem i&nbsp;rozwijam się na ścieżce javascriptu
                  </p>
                  <hr />
                  <h3>
                    <strong>Mocne strony:</strong>
                  </h3>
                  <ul>
                    <li>- React</li>
                    <li>- Javascript</li>
                    <li>- RWD</li>
                  </ul>
                </div>
              </div>
              <div className="js sticky-top">
                <span>
                  <strong className="js-text ">JS</strong>
                </span>
              </div>
            </div>
            <div className="right-box col-5 float-right">
              <div className="react-logo">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
