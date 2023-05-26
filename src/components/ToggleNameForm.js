import React, { Component } from 'react';
import '../styles/ToggleNameForm.css';

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

    return (
      <div>
        {isFormVisible && (
          <form onSubmit={this.handleSubmit}>
            <label>First name:</label>
            <input
              type='text'
              name='firstNameInput'
              value={firstNameInput}
              onChange={this.handleNameInput}
              minLength='1'
              required
            />
            <label>Second name:</label>
            <input
              type='text'
              name='secondNameInput'
              value={secondNameInput}
              onChange={this.handleNameInput}
              minLength='1'
              required
            />
            <button type='submit'>Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default ToggleNameForm;
