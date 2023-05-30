import React, { Component } from 'react';
import '../styles/AboutMeForm.css';

class AboutMeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMeInput: '',
    };
  }

  handleStatementInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { aboutMeInput } = event.target;
    const { updateAboutMe, updateFormVisibility } = this.props;
    updateAboutMe(aboutMeInput.value);
    updateFormVisibility();
  };

  render() {
    const { isFormVisible } = this.props;
    const { aboutMeInput } = this.state;

    return (
      <div>
        {isFormVisible && (
          <div className='about-me-container'>
            <form onSubmit={this.handleSubmit}>
              <label>About me:</label>
              <textarea
                name='aboutMeInput'
                maxLength='600'
                placeholder='Briefly introduce yourself...'
                required
                value={aboutMeInput}
                onChange={this.handleStatementInput}
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

export default AboutMeForm;
