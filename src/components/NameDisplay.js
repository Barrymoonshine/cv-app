import React, { Component } from 'react';
import '../styles/NameInput.css';
import ToggleNameForm from './ToggleNameForm';

class NameDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Bob',
      secondName: 'Smith',
      isFormVisible: false,
    };
  }

  updateName = (userFirstName, userSecondName) => {
    this.setState({
      firstName: userFirstName,
      secondName: userSecondName,
    });
  };

  updateFormVisibility = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible,
    }));
  };

  render() {
    const { firstName, secondName, isFormVisible } = this.state;

    let nameContainer = null;

    if (isFormVisible) {
      nameContainer = null;
    } else {
      nameContainer = (
        <div className='name-container'>
          <div className='names'>
            <div>{firstName}</div>
            <div>{secondName}</div>
          </div>
          <button onClick={this.updateFormVisibility}>Edit</button>
        </div>
      );
    }
    return (
      <div>
        <div>{nameContainer}</div>
        <div>
          <ToggleNameForm
            isFormVisible={isFormVisible}
            updateFormVisibility={this.updateFormVisibility}
            updateName={this.updateName}
          />
        </div>
      </div>
    );
  }
}

export default NameDisplay;
