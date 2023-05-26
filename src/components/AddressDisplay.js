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
      isFormVisible: false,
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
      isFormVisible: !prevState.isFormVisible,
    }));
  };

  render() {
    const { firstLine, secondLine, city, zipCode, country, isFormVisible } =
      this.state;

    return (
      <div>
        <div>
          {!isFormVisible && (
            <div className='address-container'>
              <div className='address-details'>
                <div>{firstLine}</div>
                <div>{secondLine}</div>
                <div>{city}</div>
                <div>{zipCode}</div>
                <div>{country}</div>
              </div>
              <button onClick={this.updateFormVisibility}>Edit</button>
            </div>
          )}
        </div>
        <div>
          <ToggleAddressForm
            isFormVisible={isFormVisible}
            updateFormVisibility={this.updateFormVisibility}
            updateAddress={this.updateAddress}
          />
        </div>
      </div>
    );
  }
}

export default AddressDisplay;
