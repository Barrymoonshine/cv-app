import React, { Component } from 'react';
import '../styles/NameForm.css';

class NameForm extends Component {
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
          <div className='name-container'>
            <form onSubmit={this.handleSubmit}>
              <label>First name:</label>
              <input
                type='text'
                name='firstNameInput'
                value={firstNameInput}
                onChange={this.handleNameInput}
                required
              />
              <label>Second name:</label>
              <input
                type='text'
                name='secondNameInput'
                value={secondNameInput}
                onChange={this.handleNameInput}
                required
              />
              <button type='submit' class='submit-button'>
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default NameForm;
