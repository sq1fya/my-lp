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
            <form>
              <div class="form-group">
                <label for="validationDefault01"></label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefault01"
                  placeholder="Imię i nazwisko / Firma"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1"></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <button type="submit" class="btn btn-primary">
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
