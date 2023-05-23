import React, { Component } from 'react';
import '../styles/NameInput.css';

class ToggleNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameInput: '',
      secondNameInput: '',
    };
  }

  handleNameInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstNameInput, secondNameInput } = event.target;
    const { updateName, updateFormVisibility } = this.props;
    updateName(firstNameInput.value, secondNameInput.value);
    updateFormVisibility();
  };

  render() {
    const { isFormVisible } = this.props;
    const { firstNameInput, secondNameInput } = this.state;

    let nameForm = null;

    if (isFormVisible) {
      nameForm = (
        <div className='edit-name-modal'>
          <form onSubmit={this.handleSubmit}>
            <label>First name:</label>
            <input
              type='text'
              name='firstNameInput'
              value={firstNameInput}
              onChange={this.handleNameInput}
            />
            <label>Second name:</label>
            <input
              type='text'
              name='secondNameInput'
              value={secondNameInput}
              onChange={this.handleNameInput}
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      );
    } else {
      nameForm = null;
    }
    return <div>{nameForm}</div>;
  }
}

export default ToggleNameForm;
