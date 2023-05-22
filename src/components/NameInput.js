import React, { Component } from 'react';

class NameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Bob',
      secondName: 'Smith',
    };
  }

  handleName = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, secondName } = event.target;
    this.setState({
      firstName: firstName.value,
      secondName: secondName.value,
    });
  };

  render() {
    const { firstName, secondName } = this.state;
    return (
      <div>
        <div>
          <div>{firstName}</div>
          <div>{secondName}</div>
          <button>Edit</button>
        </div>
        <div>
          <div className='edit-name-modal'>
            <div className='name-modal-content'>
              <form onSubmit={this.handleSubmit}>
                <label>First name:</label>
                <input
                  type='text'
                  name='firstName'
                  value={firstName}
                  onChange={this.handleName}
                />
                <label>Second name:</label>
                <input
                  type='text'
                  name='secondName'
                  value={secondName}
                  onChange={this.handleName}
                />
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NameInput;
