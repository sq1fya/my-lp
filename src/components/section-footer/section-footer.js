import React, { Component } from "react";
import "./section-footer.scss";

class SectionFooter extends Component {
  render() {
    return (
      <section className="section-footer container-fluid ">
        <div className="row ">
          <div className="container" style={{ height: "130px" }}>
            <div className="info-box row justify-content-between  ">
              <div className="info-box--name col-3">
                <p>Łukasz Górecki</p>
                <p>React junior developer</p>
              </div>
              <div className="info-box--contact col-4">
                <p>
                  <spam>tel: </spam>
                  <span><a href="tel:+48-515-115-750">515 115 750</a></span>
                </p>
                <p>
                  <span>mail: </span>
                  <span><a href="mailto:lukasz.gorecki@hotmail.com">lukasz.gorecki@hotmail.com</a></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SectionFooter;
