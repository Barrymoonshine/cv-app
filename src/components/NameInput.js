import React, { Component } from 'react';
import '../styles/NameInput.css';

class NameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Bob',
      secondName: 'Smith',
      isVisible: false,
    };
  }

  handleName = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, secondName } = event.target;
    this.setState({
      firstName: firstName.value,
      secondName: secondName.value,
    });
    this.handleClick();
  };

  handleClick = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  render() {
    const { firstName, secondName, isVisible } = this.state;

    let nameForm = null;

    if (isVisible) {
      nameForm = (
        <div className='edit-name-modal'>
          <form onSubmit={this.handleSubmit}>
            <label>First name:</label>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={this.handleName}
            />
            <label>Second name:</label>
            <input
              type='text'
              name='secondName'
              value={secondName}
              onChange={this.handleName}
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      );
    }
    return (
      <div>
        <div className='name-container'>
          <div className='names'>
            <div>{firstName}</div>
            <div>{secondName}</div>
          </div>
          <button onClick={this.handleClick}>Edit</button>
        </div>
        <div>{nameForm}</div>
      </div>
    );
  }
}

export default NameInput;
