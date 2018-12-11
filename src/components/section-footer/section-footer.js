import React, { Component } from "react";
import "./section-footer.scss";

class SectionFooter extends Component {
  render() {
    return (
      <section className="section-footer container-fluid">
        <div className="row ">
          <div className="container">
            <div className="info-box text-white row justify-content-lg-between flex-lg-nowrap flex-md-wrap flex-md-column flex-lg-row align-items-md-center">
              <div className="info-box--name col-lg-3 col-md-6 col-sm-6 text-lg-left ">
                <p>Łukasz Górecki</p>
                <p>React junior developer</p>
                <hr className="d-lg-none d-md-block w-75 float-left" />
              </div>
              <div className="info-box--contact col-lg-5 col-md-6  text-lg-right">
                <p>
                  <spam>tel: </spam>
                  <span><a className="text-white" href="tel:+48-515-115-750">515 115 750</a></span>
                </p>
                <p>
                  <span>mail: </span>
                  <span><a className="text-white" href="mailto:lukasz.gorecki@hotmail.com">lukasz.gorecki@hotmail.com</a></span>
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
