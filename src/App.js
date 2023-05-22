import './App.css';
import React, { Component } from 'react';
import NameInput from './components/NameInput';

class App extends Component {
  render() {
    return (
      <div>
        <div className='title'>CV generator</div>
        <div className='cv-container'>
          <NameInput />
        </div>
      </div>
    );
  }
}

export default App;
