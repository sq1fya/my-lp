import React, { Component } from 'react';
import logo from './logo.svg';
import './Logo.scss';
import './main.scss';

class App extends Component {
  render() {
    return (
      <div>
          <img src={logo} className="App-logo" alt="logo" />
        <header>
          <div class="bg-danger one"></div>
        </header>
      </div>
    );
  }
}

export default App;
