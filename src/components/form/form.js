import React from "react";
import axios from "axios"; // For making client request.


class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "", email: ""};
  }

  handleForm = e => {
    axios.post(
      "https://formcarry.com/s/5QT28VUaMjd", 
      this.state, 
      {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
        alert('Catch is ignored, because there are no errors');
      });

    e.preventDefault();
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={this.handleFields} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={this.handleFields} />

        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;