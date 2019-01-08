import React, { Component } from "react";
import SectionAboutMe from "./components/section-about-me/section-about-me";
import SectionSkills from "./components/section-skills/section-skills";
import SectionContact from "./components/section-contact/section-contact";
import SectionFooter from "./components/section-footer/section-footer";

class App extends Component {
  render() {
    return (
      <div>
        <SectionAboutMe />
        <SectionSkills />
        <SectionContact />
        <SectionFooter />
      </div>
    );
  }
}

export default App;
