import './App.css';
import React, { Component } from 'react';
import NameDisplay from './components/NameDisplay';
import AddressDisplay from './components/AddressDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <div className='title'>CV generator</div>
        <div className='cv-container'>
          <NameDisplay />
          <AddressDisplay />
        </div>
      </div>
    );
  }
}

export default App;
