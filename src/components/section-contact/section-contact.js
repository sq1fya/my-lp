import React, { Component } from "react";
import "./section-contact.scss";
import "./section-contact-lg.scss";
import Form from '../form/form';

class SectionContact extends Component {
  render() {
    return (
      <section className="section-contact container-fluid p-0">
        <div className="row ml-0 mr-0">
          <div className="container">
            <div className="title text-white mt-4 col-8 col-md-6">
              <h3>Kontakt</h3>
            </div>
            <div className="col info-box text-white pt-3">
              <h3>Jeśli jesteś zainteresowany współpracą</h3>
              <p>napisz do mnie:</p>
            </div>
            <Form />
          </div>
        </div>
      </section>
    );
  }
}
export default SectionContact;
