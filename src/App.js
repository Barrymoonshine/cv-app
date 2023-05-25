import './App.css';
import React, { Component } from 'react';
import NameDisplay from './components/NameDisplay';
import AddressDisplay from './components/AddressDisplay';
import ContactDisplay from './components/ContactDisplay';
import PersonalStatementDisplay from './components/PersonalStatementDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <div className='title'>CV generator</div>
        <div className='cv-container'>
          <NameDisplay />
          <AddressDisplay />
          <ContactDisplay />
          <div>Profile</div>
          <PersonalStatementDisplay />
          <div>Work experience</div>
        </div>
      </div>
    );
  }
}

export default App;
