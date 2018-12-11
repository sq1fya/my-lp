import React, { Component } from "react";
import "./section-contact.scss";

class SectionContact extends Component {
  render() {
    return (
      <section className="section-contact container-fluid">
        <div className="row">
          <div className="container">
            <div className="title text-white">
              <h3>Kontakt</h3>
            </div>
            <div className="col info-box text-white">
              <h3>Jeśli jesteś zainteresowany współpracą</h3>
              <p>napisz do mnie:</p>
            </div>
            <form className="form-box col-lg-5 mx-auto">
              <div className="form-group form-box--name">
                <input
                  type="text"
                  className="name-input form-control form-control-lg"
                  id="validationDefault01"
                  placeholder="Imię i nazwisko / Firma"
                />
              </div>
              <div className="form-group form-box--email">
                <input
                  type="email"
                  className="email-input form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="">
              <button type="submit" className="btn btn-primary float-lg-right btn-lg">
                Wyślij
              </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default SectionContact;
