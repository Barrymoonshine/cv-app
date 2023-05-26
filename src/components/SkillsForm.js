import React, { Component } from 'react';
import '../styles/SkillsForm.css';

class SkillsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillInput: '',
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { skillInput } = event.target;
    const { updateSkill, updateFormVisibilityCallBack, skillId } = this.props;
    updateSkill(skillId, skillInput.value)();
    updateFormVisibilityCallBack(skillId, false)();
  };

  render() {
    const { isFormVisible } = this.props;
    const { skillInput } = this.state;

    return (
      <div>
        {isFormVisible && (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Skill:</label>
              <input
                type='text'
                name='skillInput'
                value={skillInput}
                onChange={this.handleInput}
                required
              />
              <button type='submit'>Submit</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default SkillsForm;
