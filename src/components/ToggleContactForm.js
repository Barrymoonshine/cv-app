import React, { Component } from 'react';
import '../styles/ToggleContactForm.css';

class ToggleContactForm extends Component {
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
    const { isContactFormVisible } = this.props;
    const { phoneNoInput, emailInput } = this.state;

    let contactForm = null;

    if (isContactFormVisible) {
      contactForm = (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label for='email'>Email</label>
            <input
              type='email'
              name='emailInput'
              minlength='8'
              required
              value={emailInput}
              onChange={this.handleContactsInput}
            />
            <label for='phone_number'>Phone Number</label>
            <input
              type='tel'
              name='phoneNoInput'
              value={phoneNoInput}
              onChange={this.handleContactsInput}
              required
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      );
    } else {
      contactForm = null;
    }
    return <div>{contactForm}</div>;
  }
}

export default ToggleContactForm;
