import React, { Component } from "react";
import SectionAboutMe from "./components/section-about-me/section-about-me"
import SectionSkills from "./components/section-skills/section-skills"
import SectionContact from "./components/section-contact/section-contact"
import "./Logo.scss";
import "./main.scss";
class App extends Component {
  render() {
    return (
      <div>
      <SectionAboutMe/>
      <SectionSkills/>
      <SectionContact/>
      </div>
    );
  }
}

export default App;
