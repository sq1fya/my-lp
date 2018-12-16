import React, { Component } from "react";
import NavBar from './components/navbar/navbar';
import SectionAboutMe from "./components/section-about-me/section-about-me";
import SectionSkills from "./components/section-skills/section-skills";
import SectionContact from "./components/section-contact/section-contact";
import SectionFooter from './components/section-footer/section-footer';
import "./main.scss";
class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <SectionAboutMe/>
      <SectionSkills/>
      <SectionContact/>
      <SectionFooter/>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      </div>
    );
  }
}

export default App;
