import React, { Component } from "react";
import "./section-contact.scss";
import "./section-contact-lg.scss";
import Form from '../form/form';

class SectionContact extends Component {
  render() {
    return (
      <section className="section-contact container-fluid p-0">
        <div className="row">
          <div className="container">
            <div className="title text-white mt-4 col-8 col-md-6">
              <h3>Kontakt</h3>
            </div>
            <div className="col info-box text-white pt-3">
              <h3>Jeśli jesteś zainteresowany współpracą</h3>
              <p>napisz do mnie:</p>
            </div>
            <form action="https://formspree.io/gorecki.lukasz@hotmail.com" method="POST" className="form-box col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto pb-5">
              <div className="form-group form-box--name">
                <input
                  type="text"
                  name="name"
                  className="name-input form-control form-control-lg"
                  id="validationDefault01"
                  placeholder="Imię i nazwisko / Firma"
                />
              </div>
              <div className="form-group form-box--email">
                <input
                  type="email"
                  name="_replyto"
                  className="email-input form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="d-flex justify-content-center float-lg-right">
                <button type="submit" value="Send" className="btn btn-primary btn-lg">
                  Wyślij
                </button>
                <input type="hidden" name="_next" value="//site.io/thanks.html" />
              </div>
            </form>
            <Form />
          </div>
        </div>
      </section>
    );
  }
}
export default SectionContact;
