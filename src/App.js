import './App.css';
import React, { Component } from 'react';
import NameDisplay from './components/NameDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <div className='title'>CV generator</div>
        <div className='cv-container'>
          <NameDisplay />
        </div>
      </div>
    );
  }
}

export default App;
