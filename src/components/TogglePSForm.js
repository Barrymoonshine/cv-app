import React, { Component } from 'react';
import '../styles/TogglePSForm.css';

class TogglePSForm extends Component {
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
    const { isPSFormVisible } = this.props;
    const { statementInput } = this.state;

    let psForm = null;

    if (isPSFormVisible) {
      psForm = (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label for='personal_statement'>PersonalStatement</label>
            <textarea
              type='personalStatment'
              name='statementInput'
              maxlength='600'
              required
              value={statementInput}
              onChange={this.handleStatementInput}
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      );
    } else {
      psForm = null;
    }
    return <div>{psForm}</div>;
  }
}

export default TogglePSForm;
