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
            <div className="row info-box">
              <div className="left-box col-md-4">
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
              {/* <div className="skills-box col-md-4 bg-success align-self-center">
                <div className="skills-names col ">
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
              </div> */}



              <div className="skills-lines col-md-7 bg-info align-self-center" style={{textAlign: 'center'}} >
                <div className="row d-flex justify-content-end" style={{fontSize:'21px'}}><p style={{textAlign:'center'}}>React</p>
                <div className="progress" style={{width:'70%'}}>
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "30%" }}
                    />
                </div>
                </div>
                <div className="row d-flex justify-content-end" style={{fontSize:'21px'}}><p style={{textAlign:'center'}}>Javascript</p>
                <div className="progress" style={{width:'70%'}}>
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "70%" }}
                  />
                </div>
                </div>
                <div className="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "20%" }}
                  />
                </div>
                <div className="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  />
                </div>
                <div className="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "40%" }}
                  />
                </div>
                <div className="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
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
      </section>
    );
  }
}
export default SectionSkills;
