import React, { Component } from "react";
import "./section-footer.scss";

class SectionFooter extends Component {
  render() {
    return (
      <section className="section-footer container-fluid">
        <div className="row ">
          <div className="container">
            <div className="info-box row justify-content-lg-between flex-lg-nowrap flex-md-wrap">
              <div className="info-box--name col-lg-3 col-md-12 text-lg-left ">
                <p>Łukasz Górecki</p>
                <p>React junior developer</p>
              </div>
              <div className="info-box--contact col-lg-4 col-md-12 text-lg-right">
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
