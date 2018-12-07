import React, { Component } from "react";
import "./section-skills.scss";

class SectionSkills extends Component {
  render() {
    return (
      <section className="section-skills container-fluid">
        <div className="row">
          <div className="container">
            <div className="title">
              <h3>Umiejętności</h3>
            </div>
            <div className="row">
              <div className="left-box col-4">
                <div className="title-box justify-content-center">
                  <h6 className="title">Jestę juniorę</h6>
                </div>
                <div className="inside-text">
                  <h3>Uczę się</h3>
                  <p>
                    Nie chcę oszukiwać, jestem juniorem ale jestem ambitny
                    i&nbsp;szybko się uczę
                  </p>
                  <hr className="border-white" />
                  <h3>Moim atutem</h3>
                  <p>
                    jest zmysł graficzny i&nbsp;zainteresowanie światem IT, za
                    rok już będę wyjadaczem
                  </p>
                </div>
              </div>
              <div className="col ">
              <div className="skills-box col bg-danger">
                <div className="skills-names col">
                  <div className="skill-name row">
                    <p>React</p>
                  </div>
                  <div className="skill-name row">
                    <p>Javascript</p>
                  </div>
                  <div className="skill-name row">
                    <p>Redux.js</p>
                  </div>
                  <div className="skill-name row">
                    <p>RWD</p>
                  </div>
                  <div className="skill-name row">
                    <p>HTML 5</p>
                  </div>
                  <div className="skill-name row">
                    <p>CSS3</p>
                  </div>
                  <div className="skill-name row">
                    <p>Praca w Scrumie</p>
                  </div>
                </div>
              </div>
              <div className="col-5 bg-info">
              <div className="skills-lines col">
                <div className="skill-line"> </div>
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
