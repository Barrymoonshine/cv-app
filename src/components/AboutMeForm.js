import React, { Component } from 'react';
import '../styles/AboutMeForm.css';

class AboutMeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statementInput: '',
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
    const { statementInput } = event.target;
    const { updateStatement, updateFormVisibility } = this.props;
    updateStatement(statementInput.value);
    updateFormVisibility();
  };

  render() {
    const { isFormVisible } = this.props;
    const { statementInput } = this.state;

    return (
      <div>
        {isFormVisible && (
          <form onSubmit={this.handleSubmit}>
            <label>PersonalStatement</label>
            <textarea
              type='personalStatment'
              name='statementInput'
              maxLength='600'
              required
              value={statementInput}
              onChange={this.handleStatementInput}
            />
            <button type='submit'>Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default AboutMeForm;
