import React, { Component } from 'react';
import '../styles/ToggleWEForm.css';

class ToggleWEForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roleInput: '',
      organisationInput: '',
      dateFromInput: '',
      dateToInput: '',
      responsibilitiesInput: '',
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      roleInput,
      organisationInput,
      dateFromInput,
      dateToInput,
      responsibilitiesInput,
    } = event.target;
    const { updateExperinces, updateFormVisibility, id } = this.props;
    updateExperinces(
      id,
      roleInput.value,
      organisationInput.value,
      dateFromInput.value,
      dateToInput.value,
      responsibilitiesInput.value
    );
    updateFormVisibility(id, false);
  };

  render() {
    const { isFormVisible } = this.props;
    const {
      roleInput,
      organisationInput,
      dateFromInput,
      dateToInput,
      responsibilitiesInput,
    } = this.state;

    return (
      <div>
        {isFormVisible && (
          <div>
            <form onSubmit={this.handleSubmit()}>
              <label>Role:</label>
              <input
                type='text'
                name='roleInput'
                value={roleInput}
                onChange={this.handleInput}
                required
              />
              <label>Organisation :</label>
              <input
                type='text'
                name='organisationInput'
                value={organisationInput}
                onChange={this.handleInput}
                required
              />
              <label for='date_from'>Date from:</label>
              <input
                type='text'
                name='dateFromInput'
                value={dateFromInput}
                onChange={this.handleInput}
                placeholder='YYYY'
                required
              />
              <label for='date_to'>Date to:</label>
              <input
                type='text'
                name='dateToInput'
                value={dateToInput}
                onChange={this.handleInput}
                placeholder='YYYY or Present'
                required
              />
              <label for='responsibilities'>Responsibilities:</label>
              <textarea
                type='text'
                name='responsibilitiesInput'
                value={responsibilitiesInput}
                onChange={this.handleInput}
                placeholder='Provide a brief description of your responsibilities'
                required
              />
              <button type='submit'>Submit</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default ToggleWEForm;
