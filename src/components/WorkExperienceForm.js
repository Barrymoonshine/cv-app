import React, { Component } from 'react';
import '../styles/WorkExperienceForm.css';

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
    const { updateExperinces, updateFormVisibilityCallBack, experienceId } =
      this.props;
    updateExperinces(
      experienceId,
      roleInput.value,
      organisationInput.value,
      dateFromInput.value,
      dateToInput.value,
      responsibilitiesInput.value
    )();
    updateFormVisibilityCallBack(experienceId, false)();
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
            <form onSubmit={this.handleSubmit}>
              <div className='top-inputs'>
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
              </div>
              <div className='bottom-inputs'>
                <label>Date from:</label>
                <input
                  type='number'
                  max='9999'
                  name='dateFromInput'
                  value={dateFromInput}
                  onChange={this.handleInput}
                  placeholder='YYYY'
                  required
                />
                <label>Date to:</label>
                <input
                  type='text'
                  max='7'
                  name='dateToInput'
                  value={dateToInput}
                  onChange={this.handleInput}
                  placeholder='YYYY or Present'
                  required
                />
              </div>
              <label>Responsibilities:</label>
              <textarea
                type='text'
                name='responsibilitiesInput'
                value={responsibilitiesInput}
                onChange={this.handleInput}
                placeholder='Provide a brief description of your responsibilities'
                required
              />
              <button className='submit-button' type='submit'>
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default ToggleWEForm;
