import React, { Component } from 'react';
import ToggleAddressForm from './ToggleAddressForm';
import '../styles/AddressDisplay.css';

class AddressDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLine: 'The White House',
      secondLine: '1600 Pennsylvania Avenue',
      city: 'NW Washington',
      zipCode: ' DC 20500',
      country: 'USA',
      isAddressFormVisible: false,
    };
  }

  updateAddress = (
    userFirstLine,
    userSecondLine,
    userCity,
    userZipCode,
    userCountry
  ) => {
    this.setState({
      firstLine: userFirstLine,
      secondLine: userSecondLine,
      city: userCity,
      zipCode: userZipCode,
      country: userCountry,
    });
  };

  updateFormVisibility = () => {
    this.setState((prevState) => ({
      isAddressFormVisible: !prevState.isAddressFormVisible,
    }));
  };

  render() {
    const {
      firstLine,
      secondLine,
      city,
      zipCode,
      country,
      isAddressFormVisible,
    } = this.state;

    let addressContainer = null;

    if (isAddressFormVisible) {
      addressContainer = null;
    } else {
      addressContainer = (
        <div className='address-container'>
          <div className='address'>
            <div>{firstLine}</div>
            <div>{secondLine}</div>
            <div>{city}</div>
            <div>{zipCode}</div>
            <div>{country}</div>
          </div>
          <button onClick={this.updateFormVisibility}>Edit</button>
        </div>
      );
    }
    return (
      <div>
        <div>{addressContainer}</div>
        <div>
          <ToggleAddressForm
            isAddressFormVisible={isAddressFormVisible}
            updateFormVisibility={this.updateFormVisibility}
            updateAddress={this.updateAddress}
          />
        </div>
      </div>
    );
  }
}

export default AddressDisplay;
