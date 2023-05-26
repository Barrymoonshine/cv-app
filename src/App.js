import './App.css';
import React, { Component } from 'react';
import Name from './components/Name';
import Address from './components/Address';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div>
        <div className='title'>CV generator</div>
        <div className='cv-container'>
          <Name />
          <Address />
          <Contact />
          <div>About me</div>
          <AboutMe />
          <div>Work experience</div>
          <WorkExperience />
          <div>Education</div>
          <Education />
          <div>Skills</div>
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
