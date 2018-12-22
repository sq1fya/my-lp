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
        alertify.set("notifier", "position", "bottom-center");
        alertify.success("Dzieki, za kontakt ze mna :D");
      })
      .catch(error => {
        this.setState({
          error: true,
          isSubmited: false
        });
        alertify.set('notifier','delay', 4);
        alertify.set("notifier", "position", "top-center");
        alertify.error("Coś poszło nie tak, sprawdź dane");
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            id="textInput"
            type="text"
            className="form-control"
            name="title"
            value={this.state.title}
            placeholder="Enter Your Title"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            className="form-control"
            name="body"
            value={this.state.body}
            placeholder="Enter Email"
            onChange={this.changeHandler}
          />
          <button type="submit" className="btn btn-success">
            SUBMIT
          </button>
        </form>
        {this.state.isSubmited && <p>Form Submiter Succes </p>}
        {this.state.error && <p>Something Error</p>}
      </div>
    );
  }
}

export default Form;
