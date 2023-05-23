import React, { Component } from 'react';
import ToggleContactForm from './ToggleContactForm';
import '../styles/ContactDisplay.css';

class ContactDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNo: 2024561414,
      email: 'papajoe1@aol.com',
      isContactFormVisible: false,
    };
  }

  updateContacts = (userPhoneNo, userEmail) => {
    this.setState({
      phoneNo: userPhoneNo,
      email: userEmail,
    });
  };

  updateFormVisibility = () => {
    this.setState((prevState) => ({
      isContactFormVisible: !prevState.isContactFormVisible,
    }));
  };

  render() {
    const { phoneNo, email, isContactFormVisible } = this.state;

    let contactContainer = null;

    if (isContactFormVisible) {
      contactContainer = null;
    } else {
      contactContainer = (
        <div className='contact-container'>
          <div className='contact-details'>
            <div>{phoneNo}</div>
            <div>{email}</div>
          </div>
          <button onClick={this.updateFormVisibility}>Edit</button>
        </div>
      );
    }
    return (
      <div>
        <div>{contactContainer}</div>
        <div>
          <ToggleContactForm
            isContactFormVisible={isContactFormVisible}
            updateFormVisibility={this.updateFormVisibility}
            updateContacts={this.updateContacts}
          />
        </div>
      </div>
    );
  }
}

export default ContactDisplay;
