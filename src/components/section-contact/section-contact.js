import React, { Component } from "react";
import "./section-contact.scss";

class SectionContact extends Component {
  render() {
    return (
      <section className="section-contact container-fluid">
        <div className="row">
          <div className="container">
            <div className="title">
              <h3>Kontakt</h3>
            </div>
            <div className="col info-box">
              <h3>Jeśli jesteś zainteresowany współpracą</h3>
              <p>napisz do mnie:</p>
            </div>
            <form className="form-box col-lg-5 mx-auto">
              <div class="form-group form-box--name">
                <input
                  type="text"
                  class="name-input form-control form-control-lg"
                  id="validationDefault01"
                  placeholder="Imię i nazwisko / Firma"
                />
              </div>
              <div class="form-group form-box--email">
                <input
                  type="email"
                  class="email-input form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <button type="submit" class="btn btn-primary float-right btn-lg">
                Wyślij
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default SectionContact;
