import React, { Component } from "react";
import "./section-footer.scss";

class SectionFooter extends Component {
  render() {
    return (
      <section className="section-footer container-fluid ">
        <div className="row ">
          <div className="container" style={{ height: "130px" }}>
            <div className="info-box row justify-content-between  ">
              <div className="col-3"><h5>Łukasz Górecki</h5> React junior developer</div>
              <div className="col-4">tel: 515 115 750 mail: lukasz.gorecki@hotmail.com</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SectionFooter;
