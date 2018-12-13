import React, { Component } from "react";
import "./section-skills.scss";

class SectionSkills extends Component {
  render() {
    return (
      <section className="section-skills container-fluid">
        <div className="row">
          <div className="container m-0 m-lg-auto col-12 col-lg-9">
            <div className="title mt-4 col-8 col-md-6">
              <h3 className="text-white">Umiejętności</h3>
            </div>
            <div className="info-box row d-flex flex-wrap justify-content-between flex-column-reverse flex-lg-row pb-0">
              <div className="left-box text-white col-12 col-md-12 col-lg-5 col-xl-4">
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
              <div className="skills-box justify-content-md-end align-self-center col-12 col-lg-6">
                <div className="skill row justify-content-center justify-content-lg-end flex-column flex-lg-row">
                  <p className="col text-lg-right text-center">React</p>
                  <div className="progress col-lg-7 ">
                    <div
                      className="row progress-bar progress-bar-striped progress-bar-animated bg-react"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
                <div className="skill row justify-content-center justify-content-lg-end flex-column flex-lg-row">
                  <p className="col text-right">Javascript</p>
                  <div className="progress col-7">
                    <div
                      className="row progress-bar progress-bar-striped progress-bar-animated bg-js"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
                <div className="skill row justify-content-center justify-content-lg-end flex-column flex-lg-row">
                  <p className="col text-right">Redux.js</p>
                  <div className="progress col-7">
                    <div
                      className="row progress-bar progress-bar-striped progress-bar-animated bg-redux"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
                <div className="skill row justify-content-center justify-content-lg-end flex-column flex-lg-row">
                  <p className="col text-right">RWD</p>
                  <div className="progress col-7">
                    <div
                      className="row progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
                <div className="skill row justify-content-center justify-content-lg-end flex-column flex-lg-row">
                  <p className="col text-right">HTML 5</p>
                  <div className="progress col-7">
                    <div
                      className="row progress-bar progress-bar-striped progress-bar-animated bg-html5"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
                <div className="skill row justify-content-center justify-content-lg-end flex-column flex-lg-row">
                  <p className="col text-right">CSS3</p>
                  <div className="progress col-7">
                    <div
                      className="row progress-bar progress-bar-striped progress-bar-animated bg-css3"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
                <div className="skill row justify-content-center justify-content-lg-end flex-column flex-lg-row">
                  <p className="col text-right">Photoshop</p>
                  <div className="progress col-7">
                    <div
                      className="row progress-bar progress-bar-striped progress-bar-animated bg-ps"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
                <div className="skill row justify-content-center justify-content-lg-end flex-column flex-lg-row">
                  <p className="col text-right">Praca w Scrumie</p>
                  <div className="progress col-7">
                    <div
                      className="row progress-bar progress-bar-striped progress-bar-animated bg-danger"
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
