import React from "react";
import "./form.scss";
import axios from "axios"; // For making client request.
import alertify from "../../../node_modules/alertifyjs/build/alertify.min.js";
import "../../../node_modules/alertifyjs/build/css/alertify.min.css";
import "../../../node_modules/alertifyjs/build/css/themes/default.min.css";

const BASE_URL = "https://formcarry.com/s/5QT28VUaMjd"; // API yo send Email on submit

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      boody: "",
      isSubmited: false,
      error: false
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}`, {
        title: this.state.title,
        body: this.state.body
      })
      .then(res => {
        this.setState({
          isSubmited: true,
          error: false
        });
        alertify.set("notifier", "position", "top-center");
        alertify.success("Email wysłany");
      })
      .catch(error => {
        this.setState({
          error: true,
          isSubmited: false
        });
        alertify.set("notifier", "position", "top-center");
        alertify.error("Wypełnij wszystkie pola");
      });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.submitHandler}
          className="form-box col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto pb-5"
        >
          <div className="form-group form-box--name">
            <input
              id="validationDefault01"
              // id="validationDefault01" id z bootstrapa
              type="text"
              className="form-control name-input form-control form-control-lg"
              name="title"
              value={this.state.title}
              placeholder="Imię i nazwisko / Firma"
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group form-box--email">
            <input
              type="email"
              className="form-control email-input form-control form-control-lg"
              id="exampleInputEmail1"
              name="body"
              aria-describedby="emailHelp"
              value={this.state.body}
              placeholder="Email"
              onChange={this.changeHandler}
            />
          </div>
          <div className="d-flex justify-content-center float-lg-right">
            <button type="submit" className="btn btn-primary btn-lg">
              Wyślij
            </button>
          </div>
        </form>
        <div className="containet">
          <div className="row">
            {this.state.isSubmited && <p>Form Submiter Succes </p>}
            {this.state.error && <p>Something Error</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
