import React, { Component } from 'react';
import ContactForm from './ContactForm';
import '../styles/Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNo: 2024561414,
      email: 'papajoe1@aol.com',
      isFormVisible: false,
    };
  }

  updateContacts = (phoneNoInput, emailInput) => {
    this.setState({
      phoneNo: phoneNoInput,
      email: emailInput,
    });
  };

  updateFormVisibility = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible,
    }));
  };

  render() {
    const { phoneNo, email, isFormVisible } = this.state;
    return (
      <div>
        <div>
          {!isFormVisible && (
            <div className='contact-container'>
              <div className='contact-details'>
                <div>{phoneNo}</div>
                <div>{email}</div>
              </div>
              <button onClick={this.updateFormVisibility}>Edit</button>
            </div>
          )}
        </div>
        <div>
          <ContactForm
            isFormVisible={isFormVisible}
            updateFormVisibility={this.updateFormVisibility}
            updateContacts={this.updateContacts}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
