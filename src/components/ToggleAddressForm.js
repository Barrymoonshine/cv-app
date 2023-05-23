import React, { Component } from 'react';
import '../styles/ToggleAddressForm.css';

class ToggleAddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLineInput: '',
      secondLineInput: '',
      cityInput: '',
      zipCodeInput: '',
      countryInput: '',
    };
  }

  handleAddressInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      firstLineInput,
      secondLineInput,
      cityInput,
      zipCodeInput,
      countryInput,
    } = event.target;
    const { updateAddress, updateFormVisibility } = this.props;
    updateAddress(
      firstLineInput.value,
      secondLineInput.value,
      cityInput.value,
      zipCodeInput.value,
      countryInput.value
    );
    updateFormVisibility();
  };

  render() {
    const { isAddressFormVisible } = this.props;
    const {
      firstLineInput,
      secondLineInput,
      cityInput,
      zipCodeInput,
      countryInput,
    } = this.state;

    let addressForm = null;

    if (isAddressFormVisible) {
      addressForm = (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Address line 1:</label>
            <input
              type='text'
              name='firstLineInput'
              value={firstLineInput}
              onChange={this.handleAddressInput}
            />
            <label>Address line 2:</label>
            <input
              type='text'
              name='secondLineInput'
              value={secondLineInput}
              onChange={this.handleAddressInput}
            />
            <label>City:</label>
            <input
              type='text'
              name='cityInput'
              value={cityInput}
              onChange={this.handleAddressInput}
            />
            <label>ZIP/ Post code</label>
            <input
              type='text'
              name='zipCodeInput'
              value={zipCodeInput}
              onChange={this.handleAddressInput}
            />
            <label>Country</label>
            <input
              type='text'
              name='countryInput'
              value={countryInput}
              onChange={this.handleAddressInput}
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      );
    } else {
      addressForm = null;
    }
    return <div>{addressForm}</div>;
  }
}

export default ToggleAddressForm;
