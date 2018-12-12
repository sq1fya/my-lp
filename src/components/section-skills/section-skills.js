import React, { Component } from "react";
import "./section-skills.scss";

class SectionSkills extends Component {
  render() {
    return (
      <section className="section-skills container-fluid">
        <div className="row">
          <div className="container">
            <div className="title mt-4 col-8 col-md-6">
              <h3 className="text-white">Umiejętności</h3>
            </div>
            <div className="row info-box d-flex flex-wrap justify-content-between">
              <div className="left-box col-md-4 text-white">
                <div className="title-box justify-content-center">
                  <h6 className="title">Jestę juniorę</h6>
                </div>
                <div className="inside-text">
                  <div className="inside-text--box">
                    <h3>Uczę się</h3>
                    <p>
                      Nie chcę oszukiwać, jestem juniorem ale jestem ambitny i
                      szybko się uczę
                    </p>
                    <hr className="border-white" />
                    <h3>Moim atutem</h3>
                    <p>
                      jest zmysł graficzny i zainteresowanie światem IT, za rok
                      już będę wyjadaczem
                    </p>
                  </div>
                </div>
              </div>
              <div className="skills-box col-md-7 col-12 align-self-center">
                <div className="skill row d-flex justify-content-end">
                  <p>React</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-react"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
                <div className="skill row d-flex justify-content-end">
                  <p>Javascript</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-js"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
                <div className="skill row d-flex justify-content-end">
                  <p>Redux.js</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-redux"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
                <div className="skill row d-flex justify-content-end">
                  <p>RWD</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
                <div className="skill row d-flex justify-content-end">
                  <p>HTML 5</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-html5"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
                <div className="skill row d-flex justify-content-end">
                  <p>CSS3</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-css3"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
                <div className="skill row d-flex justify-content-end">
                  <p>Photoshop</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-ps"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
                <div className="skill row d-flex justify-content-end">
                  <p>Praca w Scrumie</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    />
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
export default SectionSkills;
