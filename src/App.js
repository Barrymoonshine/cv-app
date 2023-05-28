import './styles/App.css';
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
        <main>
          <div className='title'>CV generator</div>
          <div className='cv-container'>
            <div className='left-container'>
              <Name />
              <div className='sub-titles'>Contact</div>
              <Address />
              <Contact />
              <div className='sub-titles'>About me</div>
              <AboutMe />
            </div>
            <div className='right-container'>
              <div className='sub-titles'>Work experience</div>
              <WorkExperience />
              <div className='sub-titles'>Education</div>
              <Education />
              <div className='sub-titles'>Skills</div>
              <Skills />
            </div>
          </div>
        </main>
        <div class='footer'>
          <p>
            © Made by
            <a href='https://github.com/Barrymoonshine'>Barry Moonshine</a> for
            <a href='https://www.theodinproject.com/'>The Odin Project</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
