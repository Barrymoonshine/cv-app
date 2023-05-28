import React, { Component } from 'react';
import NameForm from './NameForm';
import '../styles/Name.css';
import '../styles/buttons.css';

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Joe',
      secondName: 'Biden',
      isFormVisible: false,
    };
  }

  updateName = (firstNameInput, secondNameInput) => {
    this.setState({
      firstName: firstNameInput,
      secondName: secondNameInput,
    });
  };

  updateFormVisibility = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible,
    }));
  };

  render() {
    const { firstName, secondName, isFormVisible } = this.state;

    return (
      <div>
        <div>
          {!isFormVisible && (
            <div className='name-container'>
              <div className='names'>
                <div>{firstName}</div>
                <div>{secondName}</div>
              </div>
              <button
                className='edit-button'
                onClick={this.updateFormVisibility}
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <div>
          <NameForm
            isFormVisible={isFormVisible}
            updateFormVisibility={this.updateFormVisibility}
            updateName={this.updateName}
          />
        </div>
      </div>
    );
  }
}

export default Name;
