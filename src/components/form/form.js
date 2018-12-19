import React from "react";
import axios from "axios"; // For making client request.

const BASE_URL = 'https://formcarry.com/s/5QT28VUaMjd'


class Form extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {name: "", email: "",message: "", loading: false};
  // }

  // handleForm = e => {
  //   axios.post(
  //     "https://formcarry.com/s/5QT28VUaMjd",
  //     this.state,
  //     {headers: {"Accept": "application/json"}}
  //     )
  //     .then(function (response) {
  //       console.log(response);
  //       this.setState({message: response.data})

  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       alert('Catch is ignored, sdadsadadsasrs');
  //     });
  //         // this.setState({
  //         //   message: "Wysłanie udane"
  //         // });

  //   e.preventDefault();
  // }

  // handleFields = e => this.setState({ [e.target.name]: e.target.value });
state = {
  title: '',
  boody: '',
  isSubmited: false,
  error: false
}

changeHandler = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

submitHandler = (e) => {
  e.preventDefault()

  axios.post(`${BASE_URL}`, {
    title: this.state.title,
    body: this.state.body
  })
  .then(res => {
    this.setState({
      isSubmited: true,
      error: false
    })
  })
  .catch(error => {
    this.setState({
      error: true,
      isSubmited: false
    })
  })
}

  render() {
    return (
      <div>
        <form onSubmit={ this.submitHandler}>
        <input 
        type="text"
        className='form-control'
        name='title'
        value={ this.state.title } 
        placeholder='Enter Your Title'
        onChange={ this.changeHandler}
        />
        <button type='submit' className='btn btn-success'>SUBMIT</button>
        </form>
        { this.state.isSubmited  && <p>Form Submiter Succes</p> }
        { this.state.error  && <p>Something Error</p> }
      </div>

      //   <form onSubmit={this.handleForm}>
      //     <label htmlFor="name">Name</label>
      //     <input type="text" id="name" name="name" onChange={this.handleFields} />

      //     <label htmlFor="email">Email</label>
      //     <input type="email" id="email" name="email" onChange={this.handleFields} />

      //     <button type="submit">Send</button>
      //     <div>
      //       {this.state.message}
      //     </div>
      //   </form>
      // );
    );
  }
}

export default Form;
