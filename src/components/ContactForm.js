import React, { Component } from 'react';
import '../styles/ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNoInput: '',
      emailInput: '',
    };
  }

  handleContactsInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { phoneNoInput, emailInput } = event.target;
    const { updateContacts, updateFormVisibility } = this.props;
    updateContacts(phoneNoInput.value, emailInput.value);
    updateFormVisibility();
  };

  render() {
    const { isFormVisible } = this.props;
    const { phoneNoInput, emailInput } = this.state;

    return (
      <div>
        {isFormVisible && (
          <div className='contact-container'>
            <form onSubmit={this.handleSubmit}>
              <label>Email</label>
              <input
                type='email'
                name='emailInput'
                minLength='4'
                required
                value={emailInput}
                onChange={this.handleContactsInput}
              />
              <label>Phone Number</label>
              <input
                type='tel'
                name='phoneNoInput'
                value={phoneNoInput}
                onChange={this.handleContactsInput}
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

export default ContactForm;
